var target = UIATarget.localTarget();

function captureLocalizedScreenshot(name) {
  var target = UIATarget.localTarget();
  var model = target.model();
  var rect = target.rect();

  if (model.match(/iPhone/)) {
    if (rect.size.height > 480) model = "iphone5";
    else model = "iphone";
  } else {
    model = "ipad";
  }

  var orientation = "portrait";
  if (rect.size.height > rect.size.width) orientation = "landscape";

  var language = target.frontMostApp().
    preferencesValueForKey("AppleLanguages")[0];

  var parts = [mode, orientation, language, name];
  target.captureScreenWithName(parts.join("-"));
}

captureLocalizedScreenshot("test");

