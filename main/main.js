module.exports = function main(distance, wait_time) {
    let init;
    if(distance < 8) init = [6, (distance - 2) * 0.8];
    else init = [11, (distance - 8) * 1.2];
    if(wait_time) wait_time = 0.25 * wait_time;
    if(init[1] < 0) return ('总计：'+Math.round(6+wait_time)+' 元');
    else return ('总计：'+Math.round(init[0]+init[1]+wait_time)+' 元');
};
