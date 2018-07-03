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


//change programs listed based on select1 and select2 selections
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
