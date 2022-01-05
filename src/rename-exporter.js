import sketch from 'sketch'
import settings from 'sketch/settings'

//  Dialog creation imports
import { viewContents, DIALOG_ELEMENTS, createDialog } from './dialog'

//  Import file renamer
import {
    replaceDate
} from './utils'

const PREFS_KEY = "previous_settings"

// -------------------------------------------------
// ------------------- The Plugin ------------------
// -------------------------------------------------

export default function(context) {
    const doc = sketch.getSelectedDocument()
    if (!doc) return
    const selection = doc.selectedLayers
  
    if (selection.length === 0) {
      sketch.UI.message('No layers are selected.')
      return
    } else {
  
      // Load user settings
      var previousSettings = settings.settingForKey(PREFS_KEY)
      const dialog = createDialog(previousSettings)
  
      // Run the dialog
      if (dialog.runModal() !== NSAlertFirstButtonReturn) {
        return
      } else {
        const formatElemIdx = DIALOG_ELEMENTS.findIndex(elem => elem.id === 'selectFormat')

        // Save the responses from that modal
        const formatvalueIndex = viewContents[formatElemIdx].indexOfSelectedItem();
          
        // Save user settings
        let prefs = {
          "selectFormat": DIALOG_ELEMENTS[formatElemIdx].value[formatvalueIndex],
        }
        settings.setSettingForKey(PREFS_KEY, prefs)
  
        // Create an Open dialog
        const open = NSOpenPanel.openPanel();
        open.canChooseFiles = false
        open.canChooseDirectories = true
        open.canCreateDirectories = true
      
        // run the open dialog
        if (open.runModal()) {
          const path = open.URL().path();
          const selectedLayers = selection.layers
      
          // Preserve the original layer names so we can change them back
          const originalLayerNames = selectedLayers.map(layer => layer.name)
      
          // Get the selected file format
          const fileFormat = DIALOG_ELEMENTS[formatElemIdx].value[formatvalueIndex]
        
          // Change the file names appropriately
          selectedLayers.forEach(layer => {

            //  Replace 'DATE' with current date
            layer.name = replaceDate(layer.name)
          })
  
          // Set the format and save path
          const exportOptions = {
            formats: fileFormat,
            scales: 1,
            output: path,
          }
          
          // Export the layers
          sketch.export(selectedLayers, exportOptions)
      
          // Reset the layer names
          selectedLayers.forEach((layer, i) => {
            layer.name = originalLayerNames[i]
          })
          // Show confirmation
          sketch.UI.message(`Exported ${selectedLayers.length} layers.`)
        }
      }
    }
}