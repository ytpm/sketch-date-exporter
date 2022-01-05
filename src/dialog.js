import {
    createLabel,
    createTextbox,
    createSelect,
    createCheckbox
} from './macos-ui'

const DIALOG_TITLE = "Date Exporter"
const DIALOG_REPLACE_WORD = "DATE"

const ELEMENT_HEIGHT = 24;
const DIALOG_ELEMENTS = [
    {
        type: 'label',
        id: 'replaceKeyword',
        value: `Replacing word '${DIALOG_REPLACE_WORD}' with date`,
        paddingBottom: 2
    },
    {
        type: 'label',
        id: 'fileFormat',
        value: 'File Format:',
        paddingBottom: -2
    },
    {
        type: 'select',
        id: 'selectFormat',
        value: ['png', 'jpg'],
        paddingBottom: 8
    }
]

let viewContents = null

//  Create custom dialog

function createDialog(previousSettings) {
    const dialog = NSAlert.alloc().init()

    dialog.setMessageText(DIALOG_TITLE);
    dialog.addButtonWithTitle("Export");
    dialog.addButtonWithTitle("Cancel");

    const COUNT_ELEMENTS = DIALOG_ELEMENTS.length
    const PADDING = DIALOG_ELEMENTS.map(elem => elem.paddingBottom).reduce((acc, pad) => acc + pad, 0)
    const TOTAL_MODAL_HEIGHT = COUNT_ELEMENTS * (ELEMENT_HEIGHT) + PADDING
    const customView = NSView.alloc().initWithFrame(NSMakeRect(0, 0, 200, TOTAL_MODAL_HEIGHT));
    let position_next_elem = ELEMENT_HEIGHT

    viewContents = DIALOG_ELEMENTS.map((element, i) => {
        let type = element.type

        // let padding = (i === 0 || i === 1 || i === 4) ? 0 : element.paddingBottom
        let yPos = TOTAL_MODAL_HEIGHT - position_next_elem // ((i+1) * (ELEMENT_HEIGHT))

        let UIElement;

        if (type == 'label') {
        UIElement = createLabel(NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT), 12, false, element.value);
        } else if (type == 'select') {
        UIElement = createSelect(NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT), element.value)
        } else if (type == 'checkbox') {
        UIElement = createCheckbox(NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT), element.label, element.value, element.default, true);
        } else if (type == 'text') {
        UIElement = createTextbox({
            frame: NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT),
            size: 12,
            text: element.value,
            placeholder: element.placeholder
        })
        }

        if (typeof previousSetting !== 'undefined') {
            if (element.id == 'selectCase') {
                UIElement.selectItemWithTitle(previousSetting.selectCase)
            } else if (element.id == 'fullName') {
                UIElement.setEnabled(previousSetting.useFullName)
            } else if (element.id == 'prefix') {
                UIElement.setStringValue(previousSetting.prefix)
            } else if (element.id == 'selectFormat') {
                UIElement.selectItemWithTitle(previousSetting.selectFormat)
            } else if (element.id == 'selectScale') {
                UIElement.selectItemWithTitle(previousSetting.selectScale)
            }
        }

        position_next_elem += ELEMENT_HEIGHT + element.paddingBottom

        return UIElement
    })

    viewContents.forEach(subview => {
        customView.addSubview(subview)
    })
    dialog.setAccessoryView(customView)

    return dialog
}

export {
    createDialog,
    viewContents,
    DIALOG_ELEMENTS,
    DIALOG_REPLACE_WORD
}