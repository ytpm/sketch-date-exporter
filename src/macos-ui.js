// -------------------------------------------------
// --------------- Dialog formatting ---------------
// -------------------------------------------------
export function rect(x, y, w, h) {
    var rect = NSMakeRect(x, y, w, h)
    return rect;
}

export function createLabel(frame, size, bold, text) {
    var label = NSTextField.alloc().initWithFrame(frame);
    label.setStringValue(text);
    label.setBezeled(false);
    label.setDrawsBackground(false);
    label.setEditable(false);
    label.setSelectable(false);

    if (bold) {
        label.setFont(NSFont.boldSystemFontOfSize(size));
    } else {
        label.setFont(NSFont.systemFontOfSize(size));
    }
    return label;
}

export function createTextbox({ frame, size, bold, text, placeholder }) {
    var label = NSTextField.alloc().initWithFrame(frame);
    label.setStringValue(text);
    label.setBezeled(true);
    label.setDrawsBackground(true);
    label.setEditable(true);
    label.setSelectable(true);
    label.placeholderString = placeholder

    if (bold) {
        label.setFont(NSFont.boldSystemFontOfSize(size));
    } else {
        label.setFont(NSFont.systemFontOfSize(size));
    }
    return label;
}

export function createSelect(frame, items) {
    var select = NSPopUpButton.alloc().initWithFrame(frame);
    for (var i = 0; i < items.length; i++) {
        if (items[i] == "--") {
        select.menu().addItem(NSMenuItem.separatorItem())
        } else {
        select.addItemWithTitle(items[i])
        }
    }
    return select;
}

export function createCheckbox(frame, name, value, onstate, enabled) {
    var checkbox = NSButton.alloc().initWithFrame(frame);
    checkbox.setButtonType(NSSwitchButton);
    // checkbox.setBezelStyle(1);
    checkbox.setTitle(name);
    checkbox.setTag(value);
    checkbox.setState(onstate ? NSOnState : NSOffState);
    checkbox.setEnabled(enabled);
    return checkbox;
}