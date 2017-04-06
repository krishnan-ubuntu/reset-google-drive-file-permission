function resetFilePermissions() {
  var folder = DriveApp.getFolderById('Enter folder ID here');
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    var fileEditors = file.getEditors();
    for (var i = 0; i < fileEditors.length; i++) {
      file.removeEditor(fileEditors[i].getEmail());
    }
    var fileViewers = file.getViewers();
    for (var i = 0; i < fileViewers.length; i++) {
      file.removeViewer(fileViewers[i].getEmail());
    }
    Logger.log('Done');
  }
}
