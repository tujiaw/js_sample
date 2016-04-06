/**
 * Created by tujiaw on 16/4/6.
 */
'use strict';


function myTest() {
    var obj = {};

    obj.name = $('input[name=name]').val();

    obj.email = $('input[name=email]').val();

    obj.password = $('input[name=password]').val();

    obj.gender = $('input[name=gender]:checked').val();

    obj.city = $('select[name=city] option:selected').text();

    alert(JSON.stringify(obj));
    return true;
}






