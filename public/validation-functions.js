$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            name: {
             message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'The name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z\s]+$/,
                        message: 'The name can only accept alphabetical input'
                    },
                }
            },
            age: {
                message: 'Age is not valid',
                validators: {
                    notEmpty: {
                        message: 'Age is required and cannot be empty'
                    },
                    stringLength: {
                        min: 2,
                        max: 2,
                        message: 'The age must be more than 2 characters long'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The age can only accept numeric input'
                    },
                }
            }, 
            gender: {
                message: 'Gender is not valid',
                validators: {
                    notEmpty: {
                        message: 'Gender is required and cannot be empty'
                    }
                }
            },
            org: {
                message: 'Organization / Institution / NGO is not valid',
                validators: {
                    notEmpty: {
                        message: 'Organization / Institution / NGO is required and cannot be empty'
                    }
                }
            },
            number: {
                message: 'number is not valid',
                validators: {
                    notEmpty: {
                        message: 'number is required and cannot be empty'
                    },
                    stringLength: {
                        min: 10,
                        max: 12,
                        message: 'The age must be more than 10 characters long'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The age can only accept numeric input'
                    },
                }
            },
            email: {
                message: 'Email is not valid',
                validators: {
                    notEmpty: {
                        message: 'Email is required and cannot be empty'
                    }
                }
            },
            volunteeringreason: {
                message: 'Email is not valid',
                validators: {
                    notEmpty: {
                        message: 'Email is required and cannot be empty'
                    }
                }
            },
            othervolunteer: {
                message: 'Email is not valid',
                validators: {
                    notEmpty: {
                        message: 'Email is required and cannot be empty'
                    }
                }
            },
        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbzBo0XMmDm8eZGmgSMreo-Flr6Db3S-PJ4Ae54hmcRmPIpMDsQ/exec';
        var redirectUrl = 'success.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });
});