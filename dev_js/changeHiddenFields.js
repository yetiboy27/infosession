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