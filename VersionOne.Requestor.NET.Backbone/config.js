// Generated by CoffeeScript 1.3.3
(function() {

  define(['./fields'], function(fields) {
    var assetName, configureFields, host, options, service, serviceGateway, showDebugMessages, versionOneAuth;
    showDebugMessages = true;
    host = "https://www12.v1host.com";
    service = "https://www12.v1host.com/ProofpointAPITest/rest-1.v1/Data/";
    versionOneAuth = "bstussy:Proofpoint!";
    serviceGateway = false;
    assetName = "Request";
    configureFields = function(obj) {
      var field, fieldGroup, fieldGroupName, fieldName, _results;
      _results = [];
      for (fieldGroupName in obj) {
        fieldGroup = obj[fieldGroupName];
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (fieldName in fieldGroup) {
            field = fieldGroup[fieldName];
            if (field.type === 'Select') {
              field.options = [];
              field.editorAttrs = {
                'data-class': 'sel',
                'data-assetName': field.assetName,
                'data-rel': fieldName
              };
            } else {
              if (field.optional === true) {

              } else {
                field.validators = ['required'];
              }
            }
            if (field.type === 'TextArea') {
              field.editorAttrs = {
                style: 'height:200px'
              };
            }
            if (field.autofocus === true) {
              if (!field.editorAttrs) {
                field.editorAttrs = {};
              }
              field.editorAttrs.autofocus = 'autofocus';
            }
            delete field.autofocus;
            _results1.push(delete field.optional);
          }
          return _results1;
        })());
      }
      return _results;
    };
    configureFields(fields);
    options = {
      showDebug: showDebugMessages,
      host: host,
      service: service,
      serviceGateway: serviceGateway,
      versionOneAuth: versionOneAuth,
      assetName: assetName,
      formFields: fields
    };
    return options;
  });

}).call(this);