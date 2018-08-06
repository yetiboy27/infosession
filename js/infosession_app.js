!function($){"use strict";var a={accordionOn:["xs"]};$.fn.responsiveTabs=function(e){var t=$.extend({},a,e),s="";return $.each(t.accordionOn,function(a,e){s+=" accordion-"+e}),this.each(function(){var a=$(this),e=a.find("> li > a"),t=$(e.first().attr("href")).parent(".tab-content"),i=t.children(".tab-pane");a.add(t).wrapAll('<div class="responsive-tabs-container" />');var n=a.parent(".responsive-tabs-container");n.addClass(s),e.each(function(a){var t=$(this),s=t.attr("href"),i="",n="",r="";t.parent("li").hasClass("active")&&(i=" active"),0===a&&(n=" first"),a===e.length-1&&(r=" last"),t.clone(!1).addClass("accordion-link"+i+n+r).insertBefore(s)});var r=t.children(".accordion-link");e.on("click",function(a){a.preventDefault();var e=$(this),s=e.parent("li"),n=s.siblings("li"),c=e.attr("href"),l=t.children('a[href="'+c+'"]');s.hasClass("active")||(s.addClass("active"),n.removeClass("active"),i.removeClass("active"),$(c).addClass("active"),r.removeClass("active"),l.addClass("active"))}),r.on("click",function(t){t.preventDefault();var s=$(this),n=s.attr("href"),c=a.find('li > a[href="'+n+'"]').parent("li");s.hasClass("active")||(r.removeClass("active"),s.addClass("active"),i.removeClass("active"),$(n).addClass("active"),e.parent("li").removeClass("active"),c.addClass("active"))})})}}(jQuery);
//# sourceMappingURL=./jquery.bootstrap-responsive-tabs.min.js.map
 $('.responsive-tabs').responsiveTabs({
  accordionOn: ['xs'] // xs, sm, md, lg
});

//--------------------------------

function changeHiddenFields() {
formObject = document.forms['infosessions_v160421'];
chooseWebinar = formObject.elements["webinarSelection"]; 
    
   // Begin Business
    
    if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "International Student Information Session - 7/11/18") {
        formObject.elements["hf_EventID"].value = '3b01a7e3-835f-e811-80d2-0e7c55818694';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-11 12:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-07 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-10 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000005';
    }    
   
    //End Computer and Information Sciences, Begin Counseling
    
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP-DCFT Information Sessions a.m. 7.16.18") {
        formObject.elements["hf_EventID"].value = 'f8f36663-f464-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-16 09:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-12 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-15 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }

    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP-DCFT Information Sessions p.m. 7.16.18") {
        formObject.elements["hf_EventID"].value = 'c9751372-f564-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-16 17:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-12 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-15 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP-DCFT Information Sessions a.m. 8.20.18") {
        formObject.elements["hf_EventID"].value = '8b9caace-f564-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-08-20 09:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-08-16 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-08-19 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }

    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP-DCFT Information Sessions p.m. 8.20.18") {
        formObject.elements["hf_EventID"].value = 'f9b70120-f664-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-08-20 17:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-08-16 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-08-19 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }    

    // End Counseling, Begin Education and Fine Arts 

    // else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "M.Ed Educational Leadership (Principal Licensure) 11/1/17") {
    //     formObject.elements["hf_EventID"].value = '941f84f4-f297-e711-80cb-0a51857aa408';
    //     formObject.elements["hf_elqCID"].value = '2985';
    //     formObject.elements["hf_elqLPID"].value = '172';
    //     formObject.elements["hf_elqSLID"].value = '';
    //     formObject.elements["hf_Misc1"].value = '';
    //     formObject.elements["hf_Misc2"].value = '';
    //     formObject.elements["hf_Date-Actual"].value = '2017-11-01 18:00';
    //     formObject.elements["hf_Date-StillTime"].value = '';
    //     formObject.elements["hf_Date-Reminder1"].value = '2017-10-28 06:30';
    //     formObject.elements["hf_Date-Reminder2"].value = '2017-10-31 06:30';
    //     formObject.elements["hf_Date-End"].value = '';
    //     formObject.elements["hf_ics"].value = '';
    //     formObject.elements["hf_iCal"].value = '';
    //     formObject.elements["hf_College"].value = '100000002';
    // }

    // End Education and Fine Arts, Begin Health Care   
    
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP – BSN – Information Session - 7/23/18") {
        formObject.elements["hf_EventID"].value = '45a9e90a-443f-e811-80d2-0e7c55818694';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-23 17:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-19 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-22 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }                
    
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP - BSN Virtual Information Session 7/19/2018") {
        formObject.elements["hf_EventID"].value = '8a095bd9-7833-e811-80cb-0a51857aa408';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-19 13:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-15 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-18 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    } 
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP - Doctor of Pharmacy Admissions Workshop 07.10.18") {
        formObject.elements["hf_EventID"].value = '6797e33d-152e-e811-80d2-0e7c55818694';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-10 12:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-06 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-09 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP - Doctor of Pharmacy Admissions Workshop 08.07.18") {
        formObject.elements["hf_EventID"].value = 'b172b9a4-152e-e811-80d2-0e7c55818694';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-08-07 12:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-08-03 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-08-06 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP - Doctor of Physical Therapy Information Session 7/18/18") {
        formObject.elements["hf_EventID"].value = '87fe1113-b61c-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-18 12:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-14 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-17 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000001';
    }                                                                                                                      
    
    // End Health Care, Begin Sciences and Craft Brewing    
   
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RC - Biomedical Science Information Session 7.5.18") {
        formObject.elements["hf_EventID"].value = '8f977431-6775-e811-80d9-0a27689dd954';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-05 12:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-01 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-04 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000000';
    }
    
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RC - Biomedical Science Information Session 8.2.18") {
        formObject.elements["hf_EventID"].value = '98e911a2-6775-e811-80d9-0a27689dd954';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-08-02 12:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-29 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-08-01 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000000';
    } 
    
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RC - Biomedical Science Information Session 7.19.18") {
        formObject.elements["hf_EventID"].value = 'f493ce67-6775-e811-80d9-0a27689dd954';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-19 17:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-15 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-18 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000000';
    }    

    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RC - Biomedical Science Information Session 8.16.18") {
        formObject.elements["hf_EventID"].value = 'c6db08c7-6775-e811-80d9-0a27689dd954';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-08-16 17:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-08-12 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-08-15 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000000';
    }    
   
    // End Sciences and Craft Brewing, begin Financing Your Education

    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "Financing Your Graduate Degree – 7/17/18") {
        formObject.elements["hf_EventID"].value = '3b2b80db-2626-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '917';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-17 17:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-13 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-16 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000006';
    }
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "Financing Your Graduate Degree – 7/18/18") {
        formObject.elements["hf_EventID"].value = 'fd8da618-2726-e811-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';        
        formObject.elements["hf_elqSLID"].value = '917';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-07-18 12:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-07-14 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-07-17 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '100000006';
    }

    // End Financing Your Education, begin Weekly Campus Tours 
 
    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "Post-Trad Campus tour.12.21.17") {
        formObject.elements["hf_EventID"].value = '6a45dfe0-f3cb-e711-80cb-0e6d906c15f4';
        formObject.elements["hf_elqCID"].value = '2985';
        formObject.elements["hf_elqLPID"].value = '172';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2017-12-21 08:30';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2017-12-17 06:30';
        formObject.elements["hf_Date-Reminder2"].value = '2017-12-20 06:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '';
    }                                                                                                                                                                                                                 

    // End Weekly Campus Tours, begin Special Events 

    else if ((chooseWebinar.options[chooseWebinar.selectedIndex].value) === "RHCHP - Doctor of Pharmacy Admissions Workshop 08.10.18") {
        formObject.elements["hf_EventID"].value = '1a212d51-162e-e811-80d2-0e7c55818694';
        formObject.elements["hf_elqCID"].value = '';
        formObject.elements["hf_elqLPID"].value = '278';
        formObject.elements["hf_elqSLID"].value = '';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2018-08-10 15:00';
        formObject.elements["hf_Date-StillTime"].value = '';
        formObject.elements["hf_Date-Reminder1"].value = '2018-08-06 00:30';
        formObject.elements["hf_Date-Reminder2"].value = '2018-08-09 00:30';
        formObject.elements["hf_Date-End"].value = '';
        formObject.elements["hf_ics"].value = '';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = '';
    }
    //End Special Events
    else {
        formObject.elements["hf_EventID"].value = 'No valid event entered';
        formObject.elements["hf_elqCID"].value = '111';
        formObject.elements["hf_elqLPID"].value = '45';
        formObject.elements["hf_elqSLID"].value = '181';
        formObject.elements["hf_Misc1"].value = '';
        formObject.elements["hf_Misc2"].value = '';
        formObject.elements["hf_Date-Actual"].value = '2015-11-17';
        formObject.elements["hf_Date-StillTime"].value = '2015-11-12';
        formObject.elements["hf_Date-Reminder1"].value = '2015-11-17';
        formObject.elements["hf_Date-Reminder2"].value = '';
        formObject.elements["hf_Date-End"].value = '2015-11-18';
        formObject.elements["hf_ics"].value = 'http://s1612941136.t.en25.com/e/er?s=1612941136&lid=158&elq=<span class=eloquaemail>recipientid</span>';
        formObject.elements["hf_iCal"].value = '';
        formObject.elements["hf_College"].value = 'none';
    }
}

//--------------------------------

$(document).ready(function(){  
      $('#formElement28').hide();  
      $('input').focus(function(){  
          $('input[name="sky"]').val('blue');  
      });  
  });  

//--------------------------------

$(window).load(function(){   
    var currentDate = Date.now();
    $(".showAtDate").each(function() {
      var specifiedDateLimit = $(this).data('limit');
      var date = Date.parse(specifiedDateLimit);
      if(!isNaN(date) && currentDate - date < 0) {
        $(this).show();
      }
    });
 
});  

//--------------------------------

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


//--------------------------------

/**
         * File: js/showhide.js
         * Author: design1online.com, LLC
         * Purpose: toggle the visibility of fields depending on the value of another field
         **/


jQuery(document).ready(function(){

//arrays for programs selection

var businessSessions = [
    {display: "Please select an event", value: "no value", eventTime: "2026-04-13T12:00:00" },
    {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" }
    // {display: "MBA Info Session: June 13, 6 p.m.", value: "CBE MBA Info Session 6-13-2017", eventTime: "2017-06-14T12:00:00" },     
    // {display: "Specialty Master’s Programs Info Session: June 15, 12 p.m.", value: "CBE Specialty Master's Programs Info Session 6-15-2017", eventTime: "2017-06-16T12:00:00" }   
    ];
   
var cisSessions = [
    {display: "Please select an event", value: "no value", eventTime: "2026-04-13T12:00:00" },
    {display: "International Student Information Session: July 11, 12 p.m.", value: "International Student Information Session - 7/11/18", eventTime: "2018-07-12T12:00:00" }          
    // {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" },
    ];

var counselingSessions = [
    {display: "Please select an event", value: "no value", eventTime: "2026-04-13T12:00:00" },
    // {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" },   
    {display: "M.A. Counseling & M.A. Marriage and Family Therapy : July 16, 9 a.m.", value: "RHCHP-DCFT Information Sessions a.m. 7.16.18", eventTime: "2018-07-17T12:00:00" },
    {display: "M.A. Counseling & M.A. Marriage and Family Therapy : July 16, 5:30 p.m.", value: "RHCHP-DCFT Information Sessions p.m. 7.16.18", eventTime: "2018-07-17T12:00:00" },
    {display: "M.A. Counseling & M.A. Marriage and Family Therapy : Aug. 20, 9 a.m.", value: "RHCHP-DCFT Information Sessions a.m. 8.20.18", eventTime: "2018-08-21T12:00:00" },
    {display: "M.A. Counseling & M.A. Marriage and Family Therapy : Aug. 20, 5:30 p.m.", value: "RHCHP-DCFT Information Sessions p.m. 8.20.18", eventTime: "2018-08-21T12:00:00"}
    ];

var efaSessions = [

    {display: "Please select an event", value: "no value", eventTime: "no time" },
    {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" }
    // {display: "Graduate Initial Teaching Licenses: Oct 18, 6 p.m.", value: "Graduate Initial Teaching Licenses 10/18/17", eventTime: "2017-10-19T12:00:00" },    
    // {display: "M.Ed Educational Leadership (Principal Licensure): Nov 1, 6 p.m.", value: "M.Ed Educational Leadership (Principal Licensure) 11/1/17", eventTime: "2017-11-02T12:00:00" },   
    // {display: "MFA in Creative Writing Information Session On Campus: Sept 27, 6 p.m.", value: "CCLS MILE-HIGH MFA ON-GROUND INFO SESSION 9/27/17", eventTime: "2017-09-28T12:00:00" },    
    ];

var healthcareSessions = [
    {display: "Please select an event", value: "no value", eventTime: "2026-04-13T12:00:00" },
    {display: "B.S. in Nursing: July 23, 5:30 p.m.  NO RSVP REQUIRED", value: "RHCHP – BSN – Information Session - 7/23/18", eventTime: "2018-07-24T12:00:00" }, 
    {display: "B.S. in Nursing: July 19, 1 p.m. VIRTUAL ONLINE", value: "RHCHP - BSN Virtual Information Session 7/19/2018", eventTime: "2018-07-20T12:00:00" },    
    {display: "The Regis Pharmacy Experience Virtual: July 10", value: "RHCHP - Doctor of Pharmacy Admissions Workshop 07.10.18", eventTime: "2018-07-11T01:00:00" },
    {display: "The Regis Pharmacy Experience Virtual: Aug 7", value: "RHCHP - Doctor of Pharmacy Admissions Workshop 08.07.18", eventTime: "2018-08-08T01:00:00" },
    {display: "The Regis Pharmacy Experience : Aug 10", value: "RHCHP - Doctor of Pharmacy Admissions Workshop 08.10.18", eventTime: "2018-08-11T01:00:00" }, 
    {display: "Doctor of Physical Therapy: June 20, 5:30 p.m.  VIRTUAL ONLINE", value: "RHCHP - Doctor of Physical Therapy Information Session 6/20/18", eventTime: "2018-06-21T12:00:00" }, 
    {display: "Doctor of Physical Therapy: July 18, 12 p.m.  VIRTUAL ONLINE", value: "RHCHP - Doctor of Physical Therapy Information Session 7/18/18", eventTime: "2018-07-19T12:00:00" }, 
    // {display: "Graduate Off-campus Housing: May 18, 5 p.m.", value: "RHCHP - Graduate Off-Campus Housing Webinar 5-18-17", eventTime: "2017-05-19T12:00:00" }       
    ];

var scienceSessions = [
    {display: "Please select an event", value: "no value", eventTime: "no time" },    
    {display: "M.S. Biomedical Sciences: July 5, 5 p.m. In Person", value: "RC - Biomedical Science Information Session 7.5.18", eventTime: "2018-07-06T12:00:00" },
    {display: "M.S. Biomedical Sciences: Aug. 2, 5 p.m. In Person", value: "RC - Biomedical Science Information Session 8.2.18", eventTime: "2018-08-03T12:00:00" },    
    {display: "M.S. Biomedical Sciences: July 19, 12 p.m. Online", value: "RC - Biomedical Science Information Session 7.19.18", eventTime: "2018-07-20T12:00:00" },
    {display: "M.S. Biomedical Sciences: Aug. 16, 12 p.m. Online", value: "RC - Biomedical Science Information Session 8.16.18", eventTime: "2018-08-17T12:00:00" }
    // {display: "M.S. Biomedical Sciences Dec. 14, 12 p.m.", value: "Biomed/Environmental Bio Info Session 11.16.2017", eventTime: "2017-12-15T12:00:00"},     
    // {display: "Certificate in Applied Craft Brewing Dec. 13, 6:00 p.m.", value: "Certificate in Applied Craft Brewing 12.13.2017", eventTime: "2017-12-14T12:00:00"}    
    ];    

var financingSessions = [
    {display: "Please select an event", value: "no value", eventTime: "no time" },
    // {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" }
    {display: "Financing Your Graduate Degree July 17, 5:30 p.m.", value: "Financing Your Graduate Degree – 7/17/18", eventTime: "2018-07-18T12:00:00"},
    {display: "Financing Your Graduate Degree July 18, 12 p.m.", value: "Financing Your Graduate Degree – 7/18/18", eventTime: "2018-07-19T12:00:00"}
    ];

var tourSessions = [
    {display: "Please select an event", value: "no value", eventTime: "no time" },
    {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" } 
    // {display: "Campus Tour December 19: 12 - 1 p.m.", value: "Post-Trad Campus tour.12.19.17", eventTime: "2017-12-20T12:00:00"},
    // {display: "Campus Tour December 21: 8:30 - 9:30 a.m.", value: "Post-Trad Campus tour.12.21.17", eventTime: "2017-12-22T12:00:00"}    
    ];

var eventSessions = [
    {display: "Please select an event", value: "no value", eventTime: "no time" },
    // {display: "No events currently scheduled.", value: "", eventTime: "2026-04-13T12:00:00" },     
    {display: "The Regis Pharmacy Experience : Aug 10", value: "RHCHP - Doctor of Pharmacy Admissions Workshop 08.10.18", eventTime: "2018-08-11T01:00:00" }
    ];

var noSelection = [
    {display: "Please select an area of interest above.", value: "no value", eventTime: "no time" }
    ];    


//change programs listed based on field3 selections
$("#field3").change(function () {
      
    var field3 = $("#field3").val();
    
        if (field3 === 'Business') {
            list(businessSessions);
            }
        else if (field3 === 'CIS') {
            list(cisSessions);
            }
        else if (field3 === 'Counseling') {
            list(counselingSessions);
            } 
        else if(field3 === 'EFA') {
            list(efaSessions);
            }
        else if (field3 === 'Healthcare')  {
            list(healthcareSessions);
            }
        else if (field3 === 'Science')  {
            list(scienceSessions);
            }
        else if (field3 === 'Financing')  {
            list(financingSessions);
            }
         else if(field3 === 'Tours') {
            list(tourSessions);
            }                    
        else if(field3 === 'Events') {
            list(eventSessions);
            }
        else {
            list(noSelection);
        }        
});

//function to populate child select box
function list(array_list)
{
    $("#field4").val("").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#field4").append("<option value=\"" + array_list[i].value + "\" data-limit=\"" +  array_list[i].eventTime   + "\" class=\"showAtDate\">" + array_list[i].display + "</option>");
    });
    //Hide events that are over
    var currentDate = Date.now();
    $(".showAtDate").each(function() {
      var specifiedDateLimit = $(this).data('limit');
      var date = Date.parse(specifiedDateLimit);
      if(!isNaN(date) && currentDate - date < 0) {
        $(this).show();
      }
    });
}

});


//--------------------------------

var dom0 = document.querySelector('#form82 #field0');
    var field0 = new LiveValidation(dom0, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field0.add(Validate.Presence, {
      failureMessage:"This field is required"}
              );
    var dom1 = document.querySelector('#form82 #field1');
    var field1 = new LiveValidation(dom1, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field1.add(Validate.Presence, {
      failureMessage:"This field is required"}
              );
    var dom2 = document.querySelector('#form82 #field2');
    var field2 = new LiveValidation(dom2, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field2.add(Validate.Presence, {
      failureMessage:"This field is required"}
              );
    field2.add(Validate.Format, {
      pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "A valid email address is required"}
              );
    var dom3 = document.querySelector('#form82 #field3');
    var field3 = new LiveValidation(dom3, {
      validMessage: "", onlyOnBlur: true}
                                   );
    var dom4 = document.querySelector('#form82 #field4');
    var field4 = new LiveValidation(dom4, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field4.add(Validate.Presence, {
      failureMessage:"Please choose an event."}
              );
    var dom27 = document.querySelector('#form82 #field27');
    var field27 = new LiveValidation(dom27, {
      validMessage: "", onlyOnBlur: true}
                                    );
    function resetSubmitButton(e){
      var submitButtons = e.target.form.getElementsByClassName('submit-button');
      for(var i=0;i<submitButtons.length;i++){
        submitButtons[i].disabled = false;
      }
    }
    function addChangeHandler(elements){
      for(var i=0; i<elements.length; i++){
        elements[i].addEventListener('change', resetSubmitButton);
      }
    }
    var form = document.getElementById('form82');
    addChangeHandler(form.getElementsByTagName('input'));
    addChangeHandler(form.getElementsByTagName('select'));
    addChangeHandler(form.getElementsByTagName('textarea'));
