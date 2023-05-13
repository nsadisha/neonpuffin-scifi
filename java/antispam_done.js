var antispam_done = function () // Validate substracting antispam question and enable Submit button if correct
{
    var random_number =
    [
        // first, second number of deduction, result of formula as number, as text
        ['nine', 'eight', '1', 'one'],
        ['eight', 'six', '2', 'two'],
        ['seven', 'four', '3', 'three'],
        ['eight', 'four', '4', 'four'],
        ['six', 'one', '5', 'five'],
        ['ten', 'four', '6', 'six'],
        ['nine', 'two', '7', 'seven'],
        ['twelve', 'four', '8', 'eight'],
        ['eleven', 'two', '9', 'nine']
    ];

    var antispam_anwer = document.getElementById('antispam').value;
    var submit_button = document.getElementById('submit');
    var email_form = document.getElementById('form');

    var rnd_now = sessionStorage.getItem("rnd_now");

    if ((antispam_anwer === random_number[rnd_now][2]) || (antispam_anwer === random_number[rnd_now][3]))
    {
        email_form.action = "/cgi-bin/iopost.pl";
        submit_button.disabled = false;
    }
    else
    {
        email_form.action = "spam.html";
        submit_button.disabled = true;
    }
}