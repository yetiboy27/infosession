var defaultHiddenFieldNameValue = ""; 

function getQueryStringParamValue(strQStrParam) { 

var strURL = document.location.href; 

var strQStrParamValue = ""; 

           if (strURL.indexOf('?') != -1)
           {
                       strQStrParamValue = strURL.substr(strURL.indexOf('?') + 1);
                       if (strQStrParamValue.indexOf(strQStrParam) != -1)
                       {
                                   strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf(strQStrParam));
                                   strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf('=') + 1);
                                   if (strQStrParamValue.indexOf('&') != -1)
                                   strQStrParamValue = strQStrParamValue.substr(0, strQStrParamValue.indexOf('&'));
                                   return strQStrParamValue;

                       }else{
                                   strQStrParamValue = defaultHiddenFieldNameValue;
                                   return strQStrParamValue;
                       }
           }else{
                       strQStrParamValue = defaultHiddenFieldNameValue;
                       return strQStrParamValue;
           }
} 

// Form name goes here 

var form = "infosessions_v160421"; 

function setCampaign(){ 


  var elqForm = document.forms[form];

  //repeat for each field to populate
  elqForm.elements['hfCID1'].value = getQueryStringParamValue('cid1');
  elqForm.elements['hfCID2'].value = getQueryStringParamValue('cid2');
  elqForm.elements['hfCID3'].value = getQueryStringParamValue('cid3');  

} 


window.onload = setCampaign; 
