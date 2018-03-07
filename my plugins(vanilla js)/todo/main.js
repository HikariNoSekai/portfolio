window.addEventListener('DOMContentLoaded', init_);

function init_() {

    // todo app
    function TodoApp() {

        //main application block
        this.todoApp = document.querySelector('#app');

        //initialization application body
        this.initializationApp_ = () => {
            this.tdaTodo = document.createElement('div');
            this.tdaTodo.classList.add('todo');
            this.tdaTodoHeader = document.createElement('header');
            this.tdaTodoHeader.classList.add('todo__header');
            this.tdaTodoTitle = document.createElement('span');
            this.tdaTodoTitle.classList.add('todo__title');
            this.tdaTodoTitleText = document.createTextNode('ToDo List');
            this.tdaTodoDropdown = document.createElement('div');
            this.tdaTodoDropdown.classList.add('todo__dropdown');
            this.tdaBtnDropdown = document.createElement('button');
            this.tdaBtnDropdown.classList.add('todo__btn');
            this.tdaBtnDropdown.classList.add('todo__dropdown-btn');
            this.tdaIconMore = document.createElement('i');
            this.tdaIconMore.classList.add('material-icons');
            this.tdaIconMoreText = document.createTextNode('more_vert');
            this.tdaDropdownList = document.createElement('ul');
            this.tdaDropdownList.classList.add('todo__dropdown-list');
            this.tdaDropdownItem = document.createElement('li');
            this.tdaDropdownItem.classList.add('todo__dropdown-item');
            this.tdaDropdownItemText = document.createTextNode('Done Tasks');
            this.tdaTodoBody = document.createElement('div');
            this.tdaTodoBody.classList.add('todo__body');
            this.tdaTodoBodyList = document.createElement('ul');
            this.tdaTodoBodyList.classList.add('todo__body-list');
            this.tdaTodoBtnWrap = document.createElement('div');
            this.tdaTodoBtnWrap.classList.add('todo__btn-wrap');
            this.tdaTodoValue = document.createElement('input');
            this.tdaTodoValue.classList.add('todo__value');
            this.tdaTodoValue.setAttribute('type', 'text');
            this.tdaTodoValue.setAttribute('autofocus', '');
            this.tdaBtnAdd = document.createElement('button');
            this.tdaBtnAdd.classList.add('todo__btn');
            this.tdaBtnAdd.classList.add('todo__btn--add');
            this.tdaIconAdd = document.createElement('i');
            this.tdaIconAdd.classList.add('material-icons');
            this.tdaIconAddText = document.createTextNode('add');
            this.tdaSpan = document.createElement('span');
            this.tdaSpan.classList.add('todo__btn-desc');
            this.tdaSpanText = document.createTextNode('Add task');
            // done tasks list
            this.tdaDone = document.createElement('div');
            this.tdaDone.classList.add('done');
            this.tdaDoneWrap = document.createElement('div');
            this.tdaDoneWrap.classList.add('done-wrap');
            this.tdaDoneTitle = document.createElement('h3');
            this.tdaDoneTitle.classList.add('done__title');
            this.tdaDoneTitleText = document.createTextNode('Done Tasks');
            this.tdaDoneList = document.createElement('ul');
            this.tdaDoneList.classList.add('done__list');
            this.tdaOverlay = document.createElement('div');
            this.tdaOverlay.classList.add('overlay');
            this.tdaDoneBtn = document.createElement('button');
            this.tdaDoneBtn.classList.add('todo__btn');
            this.tdaDoneBtn.classList.add('done__btn');
            this.tdaDoneBtnText = document.createTextNode('Remove completed tasks');
            //append todo list
            this.tdaIconMore.appendChild(this.tdaIconMoreText);
            this.tdaBtnDropdown.appendChild(this.tdaIconMore);
            this.tdaDropdownItem.appendChild(this.tdaDropdownItemText);
            this.tdaDropdownList.appendChild(this.tdaDropdownItem);
            this.tdaTodoDropdown.appendChild(this.tdaBtnDropdown);
            this.tdaTodoDropdown.appendChild(this.tdaDropdownList);
            this.tdaTodoTitle.appendChild(this.tdaTodoTitleText);
            this.tdaTodoHeader.appendChild(this.tdaTodoTitle);
            this.tdaTodoHeader.appendChild(this.tdaTodoDropdown);
            this.tdaIconAdd.appendChild(this.tdaIconAddText);
            this.tdaSpan.appendChild(this.tdaSpanText);
            this.tdaBtnAdd.appendChild(this.tdaIconAdd);
            this.tdaBtnAdd.appendChild(this.tdaSpan);
            this.tdaTodoBtnWrap.appendChild(this.tdaTodoValue);
            this.tdaTodoBtnWrap.appendChild(this.tdaBtnAdd);
            this.tdaTodoBody.appendChild(this.tdaTodoBodyList);
            this.tdaTodoBody.appendChild(this.tdaTodoBtnWrap);
            this.tdaTodo.appendChild(this.tdaTodoHeader);
            this.tdaTodo.appendChild(this.tdaTodoBody);
            //appen into done tasks list block
            this.tdaDoneTitle.appendChild(this.tdaDoneTitleText);
            this.tdaDoneBtn.appendChild(this.tdaDoneBtnText);
            this.tdaDoneWrap.appendChild(this.tdaDoneTitle);
            this.tdaDoneWrap.appendChild(this.tdaDoneList);
            this.tdaDoneWrap.appendChild(this.tdaDoneBtn);
            this.tdaDone.appendChild(this.tdaDoneWrap);
            this.tdaDone.appendChild(this.tdaOverlay);
            this.tdaTodo.appendChild(this.tdaDone);
            //append all into application block
            this.todoApp.appendChild(this.tdaTodo);

        }

        this.initializationApp_();

        //variables
        this.tdBody = document.querySelector('.todo__body');
        this.tasksList = document.querySelector('.todo__body-list');
        this.inputValue = document.querySelector('.todo__value');
        this.addTask = document.querySelector('.todo__btn--add');
        this.btnDD = document.querySelector('.todo__dropdown-btn');
        // done tasks list
        this.overlay = document.querySelector('.overlay');
        this.done = document.querySelector('.done');
        this.doneList = document.querySelector('.done__list');
        this.tasksWidth = this.tasksList.children.length;
        //this.noTasks = document.querySelector('.todo__message');
        this.btnClear = document.querySelector('.done__btn');
        this.cloneDone;
        this.cloneTask;

        //add no tasks message
        this.noTasksMessage_ = () => {
            this.tdaMessage = document.createElement('div');
            this.tdaMessage.classList.add('todo__message');
            this.tdaMessageText = document.createTextNode('You dont have a task. Please add one!');
            this.tdaMessage.appendChild(this.tdaMessageText);
            this.tdBody.insertBefore(this.tdaMessage, this.tdBody.firstChild);
        }

        //delete no tasks message when append new task
        this.deleteNTMessage_ = () => {
            if (document.querySelector('.todo__message')) {
                document.querySelector('.todo__message').parentNode.removeChild(document.querySelector('.todo__message'));
            }
        }


        this.createTask_ = (txt) => {

            this.deleteNTMessage_();

            /// create elements and add class for them
            this.tdaTDItem = document.createElement('li');
            this.tdaTDItem.classList.add('todo__body-item');
            this.tdaTDLabel = document.createElement('label');
            this.tdaTDLabel.classList.add('todo__body-checkbox-icon');
            this.tdaCheckbox = document.createElement('input');
            this.tdaCheckbox.setAttribute('type', 'checkbox');
            this.tdaCheckbox.classList.add('todo__body-checkbox');
            this.tdaCheckboxSpan = document.createElement('span');
            this.tdaCheckboxSpan.classList.add('checkbox');

            this.tdaDesc = document.createElement('p');
            this.tdaDesc.classList.add('todo__body-item-description');
            this.tdaDescText = document.createTextNode(txt);
            // create DOM
            this.tdaDesc.appendChild(this.tdaDescText);
            this.tdaTDLabel.appendChild(this.tdaCheckbox);
            this.tdaTDLabel.appendChild(this.tdaCheckboxSpan);
            this.tdaTDLabel.appendChild(this.tdaDesc);
            this.tdaTDItem.appendChild(this.tdaTDLabel);
            this.tasksList.appendChild(this.tdaTDItem);
        }

        this.addNewTask_ = () => {
            if (this.tasksWidth === 0) {
                this.noTasksMessage_();
            }
        }


        this.events_ = () => {

            //add new task on click btn
            this.addTask.addEventListener('click', () => {
                if (this.inputValue.value) {
                    this.createTask_(this.inputValue.value);
                    this.inputValue.value = '';
                }
            });

            //add new task by press enter
            this.inputValue.addEventListener('keyup', (e) => {
                if (e.keyCode == 13) {
                    if (this.inputValue.value) {
                        this.createTask_(this.inputValue.value);
                        this.inputValue.value = '';
                    }
                }
            });

            //delete completed task
            this.tasksList.addEventListener('click', (e) => {
                if (e.target.checked) {
                    this.cloneTask = e.target.closest('li').cloneNode(true);
                    e.target.setAttribute('disabled', 'disabled');
                    this.doneList.appendChild(this.cloneTask);
                    setTimeout(() => {
                        e.target.closest('ul').removeChild(e.target.closest('li'));
                        if (this.tasksWidth === 0) {
                            this.noTasksMessage_();
                        }
                    }, 1500);
                }
            });

            //call DD menu
            this.btnDD.addEventListener('click', () => {
                setTimeout(() => {
                    this.tdaDropdownList.classList.add('todo__dropdown-list--show');
                }, 200);
            });

            // close DD
            document.body.addEventListener('click', () => {
                if (this.tdaDropdownList.classList.contains('todo__dropdown-list--show')) {
                    this.tdaDropdownList.classList.remove('todo__dropdown-list--show')
                }
            });

            // open done tasks list
            this.tdaDropdownList.addEventListener('click', (e) => {
                if (e.target.tagName === 'LI' && e.target.classList.contains('todo__dropdown-item')) {
                    this.done.classList.add('done--show');
                    this.tdaDropdownList.classList.remove('todo__dropdown-list--show');
                }
            });

            // close done tasks list
            this.overlay.addEventListener('click', () => {
                this.done.classList.remove('done--show');
            });

            // return completed tasks into non-completed
            this.doneList.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT' && !e.target.checked) {
                    this.cloneDone = e.target.closest('li').cloneNode(true);
                    this.tasksList.appendChild(this.cloneDone);
                    e.target.closest('ul').removeChild(e.target.closest('li'));
                    this.deleteNTMessage_();
                }
            });

            // clear done tasks list
            this.btnClear.addEventListener('click', () => {
                this.doneList.innerHTML = '';
            });
        }

        this.init_ = () => {
            this.addNewTask_();
            this.events_();
        }

        this.init_();
    }

    let todoapp = new TodoApp();
}