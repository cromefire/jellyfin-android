﻿define(['dialogHelper', 'globalize', 'userSettings', 'layoutManager', 'connectionManager', 'require', 'loading', 'scrollHelper', 'emby-checkbox', 'css!./../formdialog', 'material-icons'], function (dialogHelper, globalize, userSettings, layoutManager, connectionManager, require, loading, scrollHelper) {

    function save(context) {

        var chkIndicators = context.querySelectorAll('.chkIndicator');
        for (var i = 0, length = chkIndicators.length; i < length; i++) {

            var type = chkIndicators[i].getAttribute('data-type');
            userSettings.set('guide-indicator-' + type, chkIndicators[i].checked);

        }
    }

    function load(context) {

        var chkIndicators = context.querySelectorAll('.chkIndicator');
        for (var i = 0, length = chkIndicators.length; i < length; i++) {

            var type = chkIndicators[i].getAttribute('data-type');
            chkIndicators[i].checked = userSettings.get('guide-indicator-' + type) == 'true';
        }
    }

    function showEditor() {

        return new Promise(function (resolve, reject) {

            var settingsChanged = false;

            require(['text!./guide-settings.template.html'], function (template) {

                var dialogOptions = {
                    removeOnClose: true,
                    scrollY: false
                };

                if (layoutManager.tv) {
                    dialogOptions.size = 'fullscreen';
                } else {
                    dialogOptions.size = 'small';
                }

                var dlg = dialogHelper.createDialog(dialogOptions);

                dlg.classList.add('formDialog');

                var html = '';

                html += globalize.translateDocument(template, 'sharedcomponents');

                dlg.innerHTML = html;
                document.body.appendChild(dlg);

                currentDialog = dlg;

                dlg.addEventListener('change', function () {

                    settingsChanged = true;
                });

                dlg.addEventListener('close', function () {

                    if (layoutManager.tv) {
                        scrollHelper.centerFocus.off(dlg.querySelector('.formDialogContent'), false);
                    }

                    save(dlg);

                    if (settingsChanged) {
                        resolve();
                    } else {
                        reject();
                    }
                });

                dlg.querySelector('.btnCancel').addEventListener('click', function () {
                    dialogHelper.close(dlg);
                });

                if (layoutManager.tv) {
                    scrollHelper.centerFocus.on(dlg.querySelector('.formDialogContent'), false);
                }

                load(dlg);
                dialogHelper.open(dlg);
            });
        });
    }

    return {
        show: showEditor
    };
});