$(document).ready(function(){
    var game = {
        user: '',
        comp: '',
        currentPlayer:'',
        moves:1,
    };
function pickSide(id){
        if (id === 'x'){
            game.user ='<span class="fa fa-times"></span>';
            game.comp = '<span class="fa fa-circle-o"></span>';
        }
        else if (id === 'o'){
            game.user = '<span class="fa fa-circle-o"></span>';
            game.comp = '<span class="fa fa-times"></span>';
        }
        $("#user-side").text(game.user);
        $("#comp-side").text(game.comp);
    }
    var winPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]; //players positions is sorted prior to comparison
    
    
    
});//end docReadyFunc
