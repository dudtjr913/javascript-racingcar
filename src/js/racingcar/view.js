import { $ } from '../utils/dom.js';
import {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} from '../layout/template.js';

class RacingCarView {
  renderCount() {
    const $countSection = $('#count');
    $countSection.show().innerHTML = countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = $('#process');
    $processSection.show().innerHTML = processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = $('#result');
    $resultSection.show().innerHTML = resultSectionTemplate(winners);
  }

  hideSpinnerAll() {
    $('.spinner-container', true).hide();
  }

  showMessage(message) {
    alert(message);
  }

  resetCar() {
    $('#car-input').value = '';
  }

  resetCount() {
    const $countSection = $('#count');
    $countSection.hide().innerHTML = ``;
  }

  resetProcess() {
    const $processSection = $('#process');
    $processSection.hide().innerHTML = ``;
  }

  resetResult() {
    const $resultSection = $('#result');
    $resultSection.hide().innerHTML = ``;
  }

  reset() {
    this.resetCar();
    this.resetCount();
    this.resetProcess();
    this.resetResult();
  }
}

export default RacingCarView;
