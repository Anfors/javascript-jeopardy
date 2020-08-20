$(function(){
    map = loadMap();
    loadBoard();
    $('.unanswered').click(function(){
        var category = $(this).parent().data('category');
        var question = $(this).data('question');
        var value = map[category].questions[question].value;
        var answers = $('#answers');
        $('.modal-title').empty().text(map[category].name);
        $('#question').empty().text(map[category].questions[question].question);
        answers.empty();
        $.each(map[category].questions[question].answers, function(i, answer){
            answers.append(
                '<button class="btn btn-danger answer" ' +
                    'data-category="'+category+'"' +
                    'data-question="'+question+'"' +
                    'data-value="'+value+'"' +
                    'data-correct="'+answer.correct+'"' +
                    '>'+ answer.text+'</button><br><br>'
            )
        });
        $('#question-modal').modal('show');
        console.log(category, question);
        console.log(map[category].questions[question]);
        handleAnswer();
    });

});
var score = 0;
var map;
function loadBoard(){
    var board = $('#main-board');
    var columns = map.length;
    var column_width = parseInt(12/columns);
    console.log(columns);
    $.each(map, function(i,category){
        //load category name
        var header_class = 'text-center col-sm';
        if (i === 0 && columns % 2 != 0){
            header_class += ' col-md-offset-1';
        }
        $('.panel-heading').append(
            '<div class="'+header_class+'"><h4>'+category.name+'</h4></div>'
        );
        //add column
        var div_class = 'category col-sm';
        /* if (i === 0 && columns % 2 != 0){
            div_class += ' col-md-offset-1';
        } */
        board.append('<div class="'+div_class+'" id="cat-'+i+'" data-category="'+i+'"></div>');
        var column = $('#cat-'+i);
        $.each(category.questions, function(n,question){
            //add questions
            column.append('<div class="well question unanswered" data-question="'+n+'">'+question.value+'</div>')
        });
    });
    $('.panel-heading').append('<div class="clearfix"></div>')

}

function updateScore(){
    $('#score').empty().text(score);
}

function handleAnswer(){
    $('.answer').click(function(){
        var tile= $('div[data-category="'+$(this).data('category')+'"]>[data-question="'+$(this).data('question')+'"]')[0];
        $(tile).empty().removeClass('unanswered').unbind().css('cursor','not-allowed');
        if ($(this).data('correct')){
            score += parseInt($(this).data('value'));
        }
        $('#question-modal').modal('hide');
        updateScore();
    })
}

function loadMap(){
    return board;
}

var board = 
[
    {
        "name":"category1",
        "questions":[
            {
                "value":100,
               "question":"Question 1 in category 1 for 100 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":200,
               "question":"Question 2 in category 1 for 200 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":300,
               "question":"Question 3 in category 1 for 300 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":400,
               "question":"Question 4 in category 1 for 400 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            }
        ]
    },
    {
        "name":"category2",
        "questions":[
            {
                "value":100,
               "question":"Question 1 in category 2 for 100 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":200,
               "question":"Question 2 in category 2 for 200 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":300,
               "question":"Question 3 in category 2 for 300 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":400,
               "question":"Question 4 in category 2 for 400 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            }
        ]
    },
    {
        "name":"category3",
        "questions":[
            {
                "value":100,
               "question":"Question 1 in category 3 for 100 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":200,
               "question":"Question 2 in category 3 for 200 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":300,
               "question":"Question 3 in category 3 for 300 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":400,
               "question":"Question 4 in category 3 for 400 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            }
        ]
    },
    {
        "name":"category4",
        "questions":[
            {
                "value":100,
               "question":"Question 1 in category 4 for 100 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":200,
               "question":"Question 2 in category 4 for 200 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":300,
               "question":"Question 3 in category 4 for 300 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":400,
               "question":"Question 4 in category 4 for 400 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            }
        ]
    },
    {
        "name":"category5",
        "questions":[
            {
                "value":100,
               "question":"Question 1 in category 4 for 100 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":200,
               "question":"Question 2 in category 4 for 200 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":300,
               "question":"Question 3 in category 4 for 300 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            },
            {
                "value":400,
               "question":"Question 4 in category 4 for 400 points",
                "answers":[
                    {
                        "text":"A",
                        "correct":true
                    },
                    {
                        "text":"B",
                        "correct":false
                    },
                    {
                        "text":"C",
                        "correct":false
                    },
                    {
                        "text":"D",
                        "correct":false
                    }
                ]
            }
        ]
    }
];