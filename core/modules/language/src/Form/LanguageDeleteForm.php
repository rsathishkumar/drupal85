<?php

namespace Drupal\language\Form;

use Drupal\Core\Entity\EntityDeleteForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\ContentEntityType;

/**
 * Defines a confirmation form for deleting a language entity.
 *
 * @internal
 */
class LanguageDeleteForm extends EntityDeleteForm {

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $langcode = $this->entity->id();
    $used_by = [];

    foreach ($this->entityTypeManager->getDefinitions() as $entity_type_id => $entity_type) {
      if ($entity_type instanceof ContentEntityType && $entity_type->isTranslatable()) {
        $query = $this->entityTypeManager->getStorage($entity_type_id)->getQuery()
          ->condition($entity_type->getKey('langcode'), $langcode)->accessCheck(FALSE);
        if ($entity_type->isRevisionable()) {
          $query->allRevisions();
        }
        $results = $query->range(0, 1)->execute();

        if ($results) {
          $used_by[] = $entity_type->getLabel();
        }
      }
    }

    if (!empty($used_by)) {
      $caption = $this->t('The %language (%langcode) language is used by some content entities (%usage) on your site. You can not remove this language until you have removed such content.', ['%language' => $this->entity->label(), '%langcode' => $langcode, '%usage' => implode(', ', $used_by)]);
      $form['#title'] = $this->getQuestion();
      $form['#markup'] = $caption;
      return $form;
    }

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}\
   */
  public function getDescription() {
    return $this->t('Deleting a language will remove all interface translations associated with it, and content in this language will be set to be language neutral. This action cannot be undone.');
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'language_delete_form';
  }

  /**
   * {@inheritdoc}
   */
  protected function getDeletionMessage() {
    return $this->t('The %language (%langcode) language has been removed.', ['%language' => $this->entity->label(), '%langcode' => $this->entity->id()]);
  }

  /**
   * {@inheritdoc}
   */
  public function logDeletionMessage() {
    $this->logger('language')->notice('The %language (%langcode) language has been removed.', ['%language' => $this->entity->label(), '%langcode' => $this->entity->id()]);
  }

}
