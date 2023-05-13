var antispam_test = function () // Generate a random substracting antispam question
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

    var rnd = Math.floor(Math.random() * 9); // returns a random integer from 0 to 8

    var antispam_test = document.getElementById('antispam');
    var submit_button = document.getElementById('submit');

    antispam_test.setAttribute("placeholder", "How much is " + random_number[rnd][0] + " minus " + random_number[rnd][1] + " ?");

    submit_button.disabled = true;

    sessionStorage.setItem("rnd_now", rnd);
}