import Handsontable from './../browser';
import {empty} from './../helpers/dom/element';
import {getEditor, registerEditor} from './../editors';
import {TextEditor} from './textEditor';

/**
 * @private
 * @editor InputEditor
 * @class InputEditor
 * @dependencies TextEditor
 */
class InputEditor extends TextEditor {
  createElements() {
    super.createElements();

    this.TEXTAREA = document.createElement('input');
    this.TEXTAREA.setAttribute('type', 'text');
    this.TEXTAREA.className = 'handsontableInput';
    this.textareaStyle = this.TEXTAREA.style;
    this.textareaStyle.width = 0;
    this.textareaStyle.height = 0;

    empty(this.TEXTAREA_PARENT);
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
  }
}

export {PasswordEditor};

registerEditor('input', InputEditor);
