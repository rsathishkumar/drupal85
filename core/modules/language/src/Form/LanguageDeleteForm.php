<?php

namespace Drupal\language\Form;

use Drupal\Core\Entity\EntityDeleteForm;
use Drupal\Core\Form\FormStateInterface;

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
    $num_nodes = $this->entityTypeManager->getStorage('node')->getQuery()
      ->condition('langcode', $this->entity->id())
      ->count()
      ->execute();
    if ($num_nodes) {
      $caption = '<p>' . $this->formatPlural($num_nodes, 'Language %type is used by contents on your site. You can not remove this language until you have removed all of the %type content.', '%type is used by @count pieces of content on your site. You may not remove %type until you have removed all of the %type content.', ['%type' => $this->entity->label()]) . '</p>';
      $form['#title'] = $this->getQuestion();
      $form['description'] = ['#markup' => $caption];
      return $form;
    }

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
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
