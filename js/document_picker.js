// Use the Google API Loader script to load the google.picker script.
    
  function init() {

    loadPicker();
  }

    function loadPicker() {
      gapi.load('picker', {'callback': createPicker});
    }

    var developerKey = 'AIzaSyAhehggUTYshX3_TFysy9q6jODr0RP2mmg';

    // Create and render a Picker object for searching images.
    function createPicker() {
      var view = new google.picker.View(google.picker.ViewId.DOCS);
      view.setMimeTypes("image/png,image/jpeg,image/jpg");
      var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.NAV_HIDDEN)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .setAppId("376419829615")
          .setOAuthToken("376419829615-u424kk24147la36g9bbtj89vkc6qu90g.apps.googleusercontent.com")
          .addView(view)
          .addView(new google.picker.DocsUploadView())
          //.setDeveloperKey(developerKey)
          .setCallback(pickerCallback)
          .build();
       picker.setVisible(true);
    }

    // A simple callback implementation.
    function pickerCallback(data) {
      if (data.action == google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        alert('The user selected: ' + fileId);
      }
    }