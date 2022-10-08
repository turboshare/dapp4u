
//Purpose   : To Create Custome Paging//
//Created By: Dharmendra Kumar   //
//Created Date: 01-12-2014 //
/// <reference path="jquery-1.11.1.min.js" />
var TotalRecord_Temp, PageSize_Temp, NumbersPerPage_Temp, CurrentPageIndex_Temp, ContainerDivID_Temp;
var TotalPages = 0;
var prevClass, NextClass, ActiveIndex;
var Count = 0, LoopCount, StartPageNo = 0, CurrentPageNo, FirstNo = 0;
function CreateCustomPagging(TotalRecord, PageSize, NumbersPerPage, CurrentPageIndex, ContainerDivID) {
    Count = 0;
    TotalRecord_Temp = TotalRecord;
    PageSize_Temp = PageSize;
    NumbersPerPage_Temp = NumbersPerPage;
    CurrentPageIndex_Temp = CurrentPageIndex;
    ContainerDivID_Temp = ContainerDivID;
    LoopCount = NumbersPerPage
    TotalPages = Math.ceil(TotalRecord / PageSize);

    prevClass = "enabledli";
    NextClass = "enabledli";
    ActiveIndex = "notActive";
    if (CurrentPageIndex == 1) {
        prevClass = "disabledli";
    }

    var MyPagingDiv = "<div class='PagingDiv'>";
    MyPagingDiv += "<ul>";
    MyPagingDiv += "<li class='" + prevClass + "'><a onclick='NavigatePrevPage(this)'>  Previous</a></li>";
    //MyPagingDiv += "<li class='" + prevClass + "'><a onclick='NavigatePrevPage(this)'><</a></li>";
    StartPageNo = (CurrentPageIndex - 1) * NumbersPerPage + 1;
    CurrentPageNo = StartPageNo;

    while (LoopCount >= 1) {
        if (Count == 0) {
            FirstNo = parseInt(CurrentPageNo);
        }
        Count = Count + 1;
        if (CurrentPageIndex == CurrentPageNo) {

            ActiveIndex = "pageactive";
        }
        else {

            ActiveIndex = "notactive";
        }
        MyPagingDiv += "<li><a id='" + "liNav" + (NumbersPerPage - LoopCount + 1).toString() + "' class='" + ActiveIndex + "' onclick='PageNoClick(this," + CurrentPageNo.toString() + ")'>" + CurrentPageNo.toString() + "</a></li>";
        LoopCount = LoopCount - 1;
        CurrentPageNo = parseInt(CurrentPageNo) + 1;
        if (CurrentPageNo > TotalPages) {
            LoopCount = 0;
        }
    }

    if (CurrentPageNo > TotalPages) {
        NextClass = "disabledli";
    }

    // alert(NextClass);
    MyPagingDiv += "<li class='" + NextClass + "'><a onclick='NavigateNextPage(this)'>Next</a></li>";
    //MyPagingDiv += "<li class='" + NextClass + "'><a onclick='NavigateNextPage(this)'>»</a></li>";
    MyPagingDiv += "</ul></div>";

    $(ContainerDivID).html(MyPagingDiv);
    if (TotalPages <= 1) {
        $(".PagingDiv").hide();
    }


}
function NavigateNextPage(id_next) {
    if (CurrentPageNo <= TotalPages) {
        CreateCustomPagging(TotalRecord_Temp, PageSize_Temp, NumbersPerPage_Temp, parseInt(CurrentPageIndex_Temp) + 1, ContainerDivID_Temp);
        //  PageNoClick(id_next, FirstNo);
        // $("#liNav1").removeClass("notactive");
        //  $("#liNav1").addClass("active");
    }
}
function NavigatePrevPage(id_Prev) {
    if (parseInt(CurrentPageIndex_Temp) - 1 > 0) {
        CreateCustomPagging(TotalRecord_Temp, PageSize_Temp, NumbersPerPage_Temp, parseInt(CurrentPageIndex_Temp) - 1, ContainerDivID_Temp);
        // PageNoClick(id_Prev, FirstNo);
        //  $("#liNav1").removeClass("notactive");
        //   $("#liNav1").addClass("active");
    }
}
function isValidSpecialCharector(str) {
    return !/[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
function PageNoClick(id_temp, PageNo) {

    PageNavigationClick(id_temp, PageNo);
}

var myAlertDiv = "";
function ShowAlertPopup(ErrorTitle, ErrolMessage) {
    $("#ErrorTitle").html(ErrorTitle);
    $("#ErrorMsg").html(ErrolMessage);
    $('#ErrorModel').modal('show');
    //myAlertDiv = "";
    //myAlertDiv += "<div style='width:50%;' id='divAlertPopup'><table cellpadding='0' cellspacing='0' style='width:100%;border-radius:9px 9px 4px 4px!important'  class='alertPopupBody'>";
    //myAlertDiv += "<tr> <td class='tdALertHeader'><div class='errorCss'>  &nbsp<span>" + ErrorTitle + "</span>  </div> <a id='btnCloseAlertButton' onclick='closedivAlertPopup()' class='closeAlertpopsty'> </a>  </td></tr>";
    //myAlertDiv += " <tr><td class='tdALertBody'> <span id='alertMessage'><h3>" + ErrolMessage + "</h3></span></td></tr>";
    //myAlertDiv += "</table></div>";
    //myAlertDiv += "<div id='divProgressBarTemp'></div>";
    //$("body").append(myAlertDiv);
    //$("#divAlertPopup").show(500);
    //$("#divProgressBarTemp").addClass("progressAdd");
}


function closedivAlertPopup() {
    $("#divAlertPopup").remove();
    $("#divAlertPopup").hide(200);
    $("#divProgressBarTemp").removeClass("progressAdd");
}
function ShowConfirmationPopup(ErrorTitle, ErrolMessage) {
    myAlertDiv = "";
    myAlertDiv += "<div style='width:50%;' id='divConfirmPopup'><table cellpadding='0' cellspacing='0' style='width:100%;border-radius:15px !important'  class='ConfirmPopupBody'>";
    myAlertDiv += "<tr> <td class='tdConfirmHeader'><div class='confirmCss'>  &nbsp<span>" + ErrorTitle + "</span>  </div>   </td></tr>";
    myAlertDiv += " <tr><td class='tdConfirmBody'> <span>" + ErrolMessage + " </span></td></tr>";
    myAlertDiv += "<tr><td class='tdConfirmCloseButton'><a id='btnyesDoit' onclick='yesDoIt()' class='CssyesDoit'>Yes</a> &nbsp; &nbsp; <a id='btnNoDoIt' onclick='noDoIt()' class='closeConfirmButton'>No</a></td> </tr>";
    myAlertDiv += "</table></div>";
    myAlertDiv += "<div id='divProgressBarTemp'></div>";
    $("body").append(myAlertDiv);
    $("#divConfirmPopup").fadeIn(500);
    $("#divProgressBarTemp").addClass("progressAdd");
}

function yesDoIt() {
    $("#divConfirmPopup").remove();
    $("#divConfirmPopup").hide(500);
    $("#divProgressBarTemp").removeClass("progressAdd");
    return true;
}

function noDoIt() {
    $("#divConfirmPopup").remove();
    $("#divConfirmPopup").hide(500);
    $("#divProgressBarTemp").removeClass("progressAdd");
    return false;
}

function ShowSuccessPopup(SuccessTitle, SuccessMessage, IsRoload, RedirectTo2) {
   
    if (IsRoload == undefined) {
        IsRoload = 0;
    }
    else if (IsRoload == "") {
        IsRoload = 0;
    }

    if (RedirectTo2 != undefined) {
        if (RedirectTo2 != "") {
        }
        else {
            RedirectTo2 = "";
        }
    }
    else {
        RedirectTo2 = "";
    }
    IsRoloadmain = IsRoload;
    RedirectTo = RedirectTo2;
   
    $("#SuccessTitle").html(SuccessTitle);
    $("#SuccessMsg").html(SuccessMessage);
   
  
    $('#SuccessModel').modal('show');
   
   
    //myAlertDiv = "";
    //myAlertDiv += "<div style='width:50%;' class='cssDivConfirm' id='divConfirmPopup'><table  cellpadding='0' cellspacing='0' style='width:100%;border-radius:9px 9px 4px 4px !important'  class='successPopupBody'>";
    //myAlertDiv += "<tr> <td class='tdSuccessHeader'><div class='cssSuccessHeaderContent'>" + SuccessTitle + "</div>  </div>   <a id='btnCloseConfirmButton' onclick='closedivSuccessPopup()' class='closeSuccessButton'></a> </td></tr>";
    //myAlertDiv += " <tr><td class='tdSuccessBody'> <span id='alertMessage'>" + SuccessMessage + " </span></td></tr>";
    //myAlertDiv += "</table></div>";
    //myAlertDiv += "<div id='divProgressBarTemp'></div>";
    //$("body").append(myAlertDiv);
    //jQuery('#divConfirmPopup').fadeIn(1000);
    //$("#divProgressBarTemp").addClass("progressAdd");
}


function closedivSuccessPopup() {
    $("#divConfirmPopup").remove();
    $("#divConfirmPopup").hide(200);
    $("#divProgressBarTemp").removeClass("progressAdd");
}
function ShowProgressOnBody() {
    $('body').append("<div id='divProgressCommon'></div>");
    $("#divProgressCommon").html(" <span class='loading style-2'></span>");
    //$("#divProgressCommon").html("<div class='loading style-2'> <img id='imgLoader' src='../images/search-loading.gif'></div>");
    $("#divProgressCommon").addClass("progressAddCommon");
}
function RemoveProgressFromBody() {
   
    $("#divProgressCommon").html("");
    $("#divProgressCommon").removeClass("progressAddCommon");
    $("#divProgressCommon").remove();
}

function ShowPageLoader(msg) {
    return "<div class='pageloader1'><div class='msg'>" + msg + "<div> <div class='loadingPage style-1'></div></div>";
    // $("#divProgressCommon").html("<div class='divImgLoader'> <img id='imgLoader' src='../images/search-loading.gif'></div>");
}
$('.percentage').on('keydown', function (e) {
    var getthisval = $(this).val();
    var value = "";
    if (parseInt(event.keyCode) >= 96 && parseInt(event.keyCode) <= 105) {
        if (parseInt(event.keyCode) == 96) {
            value = '0';
        }
        else if (parseInt(event.keyCode) == 97) {
            value = '1';
        }
        else if (parseInt(event.keyCode) == 98) {
            value = '2';
        }
        else if (parseInt(event.keyCode) == 99) {
            value = '3';
        }
        else if (parseInt(event.keyCode) == 100) {
            value = '4';
        }
        else if (parseInt(event.keyCode) == 101) {
            value = '5';
        }
        else if (parseInt(event.keyCode) == 102) {
            value = '6';
        }
        else if (parseInt(event.keyCode) == 103) {
            value = '7';
        }
        else if (parseInt(event.keyCode) == 104) {
            value = '8';
        }
        else if (parseInt(event.keyCode) == 105) {
            value = '9';
        }
        getthisval = getthisval.trim() + value.trim();
    }
    else {
        value = String.fromCharCode(event.keyCode);
        getthisval = getthisval.trim() + value.trim();
    }
    if (getthisval != "" && parseFloat(getthisval) > 100) {
        return false;
    }
});
$('.dtmdate').keydown(function (e) {
    if (parseInt(event.keyCode) == 8 || parseInt(event.keyCode) == 32 || parseInt(event.keyCode) == 46) {
        $(this).val('');
    }
    return false;
});
$('.cssOnlyNumericDecimal').keypress(function (eve) {

    if (eve.keyCode == 8 || eve.keyCode == 9 || eve.keyCode == 37 || eve.keyCode == 37 || eve.keyCode == 36) {

    }
    else {
        if ((eve.which != 46 || $(this).val().indexOf('.') != -1) && (eve.which < 48 || eve.which > 57) || (eve.which == 46 && $(this).caret().start == 0)) {
            eve.preventDefault();
        }
        $(this).keyup(function (eve) {
            if ($(this).val().indexOf('.') == 0) {
                $(this).val($(this).val().substring(1));
            }
        });
    }

});

$(".cssOnlyNumeric").on("keyup", function () {

    var value = $(this).val();
    if (isNaN(value)) {
        $(this).val($(this).val().replace(/[^\d]/g, ""));
    }
    else {
    }
    var f = value.indexOf(".");
    if (f > -1) {
        var sub2 = value.substring(0, f);
        $(this).val(sub2);
        var l = value.indexOf(".", f);
        if (l > f) {
            var sub = value.substring(0, l);
            if (f != l) {
                $(this).val(sub);
                return false;
            }
        }
    }
});

//-------------------------------------------------------validate email----------------------------------
function validateEmail(email) {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);

    if (!valid) {
        return false;
    } else {
        return true;
    }
}

var divTextID = " ";
function ResetTextBox(className, cssName) {
    divTextID = "." + className + " input[type='text'],input[type='password']";
    // alert(divTextID);
    $(divTextID).each(function () {
        $(this).val("");
        $(this).removeClass(cssName);
    });
}

function ResetTextBoxCssById(idName, cssName) {

    divTextID = "#" + idName + " input[type='text'],input[type='password'],select";
    // alert(divTextID);
    $(divTextID).each(function () {
        $(this).removeClass(cssName);
    });
}


function ResetFormAndCssByID(idName, cssName) {

    divTextID = "#" + idName + " input[type='text'],input[type='password'],select";
    // alert(divTextID);
    $(divTextID).each(function () {
        $(this).removeClass(cssName);
        $(this).val("");
    });
}
function RemoveSpan(className, cssName) {
    // alert(divTextID);
    $("." + className + " ." + cssName).each(function () {
        $(this).remove();
    });
}

function RemoveSpanById(IDName, cssName) {
    $("#" + IDName + " ." + cssName).each(function () {
        $(this).remove();
    });
}

function AddErrorSpan(controlId, className, message) {
    $("#" + controlId).after("<span class='" + className + "'><dt class='ErrorArrow'></dt>" + message + "</span>");
    $("." + className).fadeIn(200);
}

function AddValidSpan(controlId, className) {
    $("#" + controlId).after("<span class='" + className + "'></span>");
}
function AddSuccessSpanAfter(controlId, className, message) {
    $("#" + controlId).after("<span class='" + className + "'>" + message + "</span>");
    $("." + className).fadeIn(200);
}

function AddErrorSpanAbove(controlId, className, message) {
    $("#" + controlId).before("<span class='" + className + "'><dt class='ErrorArrow'></dt>" + message + "</span>");
    $("." + className).fadeIn(200);
    // $("#" + controlId).after("<span class='" + className + "'><dt class='ErrorArrow'></dt>" + message + "</span>");
}

function AddtxtErroHover(controlId) {
    $("#" + controlId).addClass("txtErroHover");
    $("body, html").animate({
        scrollTop: $('#' + controlId).offset().top - 60
    }, 500);
    $('#' + controlId).focus();
}
function RemovetxtErroHover(className) {
    $("." + className + " .txtErroHover").each(function () {
        $(this).removeClass("txtErroHover");
    });
}
function RemovetxtErroHoverByID(className) {
    $("#" + className + " .txtErroHover").each(function () {
        $(this).removeClass("txtErroHover");
    });
}
function RemoveValidIconId(IDName, cssName) {
    $("#" + IDName + " ." + cssName).each(function () {
        $(this).remove();
    });
}

function CustomFocusBYID(controlID) {
    $('#' + controlID).focus();
    $("body, html").animate({
        scrollTop: $('#' + controlID).offset().top
    }, 500);
    $('#' + controlID).focus();
}

var MySuccessLabel = " ";
function GetSuccessLabel(msg) {
    MySuccessLabel = " <div class='successLabel' >" + msg + " <div  onclick='closeSuccessLabel(this)' class='close'><a>×</a></div> </div>";

    return MySuccessLabel;
}
function GetErrorLabel(msg) {
    MySuccessLabel = " <div class='errorLabel' >" + msg + " <div  onclick='closeSuccessLabel(this)' class='close'><a>×</a></div> </div>";
    return MySuccessLabel;
}
function closeSuccessLabel(id) {
    $(id).parent('div').fadeOut(500);
    return;
}


var ControlIDTemp = "";
var HasClassTemp = "";
var IsValid = "yes";
function ValidateDiv(formID) {
    $('#' + formID + ' td').each(function () {

        if (IsValid == "no") {
            return;
        }
        if ($(this).find(':radio').length > 0) {
            ControlIDTemp = $(this).find(':radio').attr("id");
            HasClassTemp = $("#" + ControlIDTemp).hasClass("required");
            if (HasClassTemp == true) {
                if ($('input[name=' + ControlIDTemp + ']:checked').val() == undefined) {
                    alert("Please select " + $(this).prev('td').text().replace("*", ""));
                    IsValid = "no";
                    return;
                }
            }
            // AddtxtErroHover(ControlIDTemp);
        }
        if ($(this).find(':text').length > 0) {
            if ($(this).find(':text').length > 0) {
                $(this).find(':text').each(function () {
                    ControlIDTemp = $(this).attr("id");
                    HasClassTemp = $("#" + ControlIDTemp).hasClass("required");
                    if (HasClassTemp == true) {
                        if ($("#" + ControlIDTemp).val().trim() == "") {
                            AddtxtErroHover(ControlIDTemp);
                            IsValid = "no";
                        }
                        else {
                            if (("#" + ControlIDTemp) == "#txtAdPrice") {
                                var price = $("#" + ControlIDTemp).val().trim();
                                if (parseFloat(price) <= 0) {
                                    AddtxtErroHover(ControlIDTemp);
                                    IsValid = "no";
                                }
                            }
                        }
                    }
                });
            }
        }
        if ($(this).find('select').length > 0) {
            ControlIDTemp = $(this).find('select').attr("id");
            HasClassTemp = $("#" + ControlIDTemp).hasClass("required");
            if (HasClassTemp == true) {
                if ($("#" + ControlIDTemp + " option:selected").val().trim() == "") {
                    AddtxtErroHover(ControlIDTemp);
                    IsValid = "no";
                    return;
                }
            }
        }
        if ($(this).find('textarea').length > 0) {
            ControlIDTemp = $(this).find('textarea').attr("id");
            HasClassTemp = $("#" + ControlIDTemp).hasClass("required");
            if (HasClassTemp == true) {
                if ($("#" + ControlIDTemp).val().trim() == "") {
                    AddtxtErroHover(ControlIDTemp);
                    IsValid = "no";
                    return;
                }
            }
        }
    });

}


function mF(n, d) {
    if (d == 0)
        return Math.round(n * 1);
    else if (d == 1)
        return Math.round(n * 10) / 10;
    else if (d == 2)
        return Math.round(n * 100) / 100;
    else if (d == 3)
        return Math.round(n * 1000) / 1000;
    else if (d == 4)
        return Math.round(n * 10000) / 10000;
    else if (d == 5)
        return Math.round(n * 100000) / 100000;
    return n;
}



$(document).ready(function () {

   //$('input').keyup(function () {
   //     var regex = new RegExp("^[0-9a-zA-Z \b]+$");
   //     var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
   //     if (!regex.test(key)) {
   //         event.preventDefault();
   //         return false;
   //     }
   //});
    jQuery.fn.extend({
        scrollToMe: function () {
            var x = jQuery(this).offset().top - 100;
            jQuery('html,body').animate({ scrollTop: x }, 500);
        }
    });
})