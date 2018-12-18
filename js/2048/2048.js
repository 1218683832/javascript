// 将对网页16个格子的计算分布转化为对4*4二维数组的运算;
// 先计算一般情况-左移,再推算右移上移下移的特殊情况;
// 对4*4数组上下左右移动计算;

var game = false;

var score;

var needOne = false;

var board = new Array();

const time = 200;

var myTimeout = null;

var timeOut = true;

$(document).ready(function () {
    // window.alert("document ready");
})

$(document).keydown(function (event) {
    // alert( "document Handler for .keydown() called." + event.keydown );
    console.log(event);
    if (!game) {
        console.log('游戏未开始');
        return;
    }
    if (timeOut) {
        timeOut = false;
        clearTimeout(myTimeout);
        myTimeout = setTimeout(function () {
            timeOut = true;
        }, time);
    } else {
        return;
    }
    switch (event.keyCode) {
        case 37:// 左键
            console.log("you pressed down 'left'");
            move_left();
            if (needOne) {
                createGridCell();
            }
            break;
        case 38:// up键
            console.log("you pressed down 'up'");
            move_up();
            if (needOne) {
                createGridCell();
            }
            break;
        case 39:// 右键
            console.log("you pressed down 'right'");
            move_right();
            if (needOne) {
                createGridCell();
            }
            break;
        case 40:// down键
            console.log("you pressed down 'down'");
            move_down();
            if (needOne) {
                createGridCell();
            }
            break;
        default:
            console.log("you pressed what i dont care");
            break;
    }
});

// 上移
function move_down() {
    for (let i = 3; i >= 0; i--) {
        for (let j = 3, k = 2; k >= 0; k--) {
            if (board[k][i] > 0) {// 后一项大于0才去比较值
                if (board[j][i] == board[k][i]) {
                    // if (j == k) {
                    //     continue;
                    // }
                    // 情况1：j和k相等，合并并计分
                    board[j][i] *= 2;
                    board[k][i] = 0;
                    score += board[j][i];
                    j--;
                    needOne = true;
                } else if (board[j][i] == 0) {
                    // 情况2：j为空，把k赋值给j，k向j移动
                    board[j][i] = board[k][i];
                    board[k][i] = 0;
                    needOne = true;
                } else {
                    // 情况3：j不为空，且和k不相等，
                    j--;
                    board[j][i] = board[k][i];
                    if (j != k) {
                        // 判断j项和k项是否原先就挨在一起，若不是则把k项赋值为空（值为0）
                        board[k][i] = 0;
                        needOne = true;
                    }
                }
            }
        }
    }
    console.log(board);
    showGridCell2();
}

// 上移
function move_up() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0, k = 1; k < 4; k++) {
            if (board[k][i] > 0) {// 后一项大于0才去比较值
                if (board[j][i] == board[k][i]) {
                    // if (j == k) {
                    //     continue;
                    // }
                    // 情况1：j和k相等，合并并计分
                    board[j][i] *= 2;
                    board[k][i] = 0;
                    score += board[j][i];
                    j++;
                    needOne = true;
                } else if (board[j][i] == 0) {
                    // 情况2：j为空，把k赋值给j，k向j移动
                    board[j][i] = board[k][i];
                    board[k][i] = 0;
                    needOne = true;
                } else {
                    // 情况3：j不为空，且和k不相等，
                    j++;
                    board[j][i] = board[k][i];
                    if (j != k) {
                        // 判断j项和k项是否原先就挨在一起，若不是则把k项赋值为空（值为0）
                        board[k][i] = 0;
                        needOne = true;
                    }
                }
            }
        }
    }
    console.log(board);
    showGridCell2();
}

// 右移
function move_right() {
    for (let i = 3; i >= 0; i--) {
        for (let j = 3, k = 2; k >= 0; k--) {
            if (board[i][k] > 0) {// 前一项大于0才去比较值
                if (board[i][j] == board[i][k]) {
                    // if (j == k) {
                    //     continue;
                    // }
                    // 情况1：j和k相等，合并并计分
                    board[i][j] *= 2;
                    board[i][k] = 0;
                    score += board[i][j];
                    j--;
                    needOne = true;
                } else if (board[i][j] == 0) {
                    // 情况2：j为空，把k赋值给j，k向j移动
                    board[i][j] = board[i][k];
                    board[i][k] = 0;
                    needOne = true;
                } else {
                    // 情况3：j不为空，且和k不相等，
                    j--;
                    board[i][j] = board[i][k];
                    if (j != k) {
                        // 判断j项和k项是否原先就挨在一起，若不是则把k项赋值为空（值为0）
                        board[i][k] = 0;
                        needOne = true;
                    }
                }
            }
        }
    }
    console.log(board);
    showGridCell2();
}

// 左移
function move_left() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0, k = 1; k < 4; k++) {
            if (board[i][k] > 0) {// 后一项大于0才去比较值
                if (board[i][j] == board[i][k]) {
                    // if (j == k) {
                    //     continue;
                    // }
                    // 情况1：j和k相等，合并并计分
                    board[i][j] *= 2;
                    board[i][k] = 0;
                    score += board[i][j];
                    j++;
                } else if (board[i][j] == 0) {
                    // 情况2：j为空，把k赋值给j，k向j移动
                    board[i][j] = board[i][k];
                    board[i][k] = 0;
                } else {
                    // 情况3：j不为空，且和k不相等，
                    j++;
                    board[i][j] = board[i][k];
                    if (j != k) {
                        // 判断j项和k项是否原先就挨在一起，若不是则把k项赋值为空（值为0）
                        board[i][k] = 0
                    }
                }
            }
        }
    }
    console.log(board);
    showGridCell2();
}

// 新的游戏
$(document).ready(function () {
    $('#btn-new-game').click(function () {
        newGame();
    });
});

// 开始新游戏
function newGame() {
    console.log('new game');
    init();
    createGridCell();
    createGridCell();
    console.log(board);
}

// 初始化数据
function init() {
    game = true;
    needOne = true;
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }
    showGridCell2();
}

// 创建一个格子
function createGridCell() {
    if (clickBoard()) {
        console.log('没有足够的位置了');
        needOne = false;
        return;
    }
    // 生成1个随机位置点
    var p = new randomPosition();
    while (board[p.y][p.x] != 0) {
        p = new randomPosition();
    }
    console.log(p);
    board[p.y][p.x] = p.n;
    var index = p.x + 1 + p.y * 4;
    showGridCell(p, index);
    // var gridCell = showGridCell(p, index);
    // console.log(gridCell.text());
    // console.log(gridCell.prop("className"));
    return;
}

// 在生成随机数字之前判断是否还有位置
function clickBoard() {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
            if (board[i][j] == 0)
                return false;
    return true;
}

function showGridCell2() {
    // return;
    for (var i = 0; i < 4; i++) {// 循环最外面的数组
        for (var j = 0; j < 4; j++) {// 循环里面的数组
            var gridcell = $('.game-container>div:nth-child(' + (i + 1 + j * 4) + ')>span:nth-child(2)');
            gridcell.removeClass();// 当前小格子移除所有class
            switch (board[j][i]) {// 小格子根据值添加class
                case 0:
                    gridcell.addClass('grid-cell-def');
                    gridcell.text('');
                    gridcell.animate({ opacity: '0' }, 0);
                    break;
                case 2:
                    gridcell.addClass('grid-2');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
                case 4:
                    gridcell.addClass('grid-4');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
                case 8:
                    gridcell.addClass('grid-8');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
                case 16:
                    gridcell.addClass('grid-16');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
                case 32:
                    gridcell.addClass('grid-32');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
                case 64:
                    gridcell.addClass('grid-64');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
                default:
                    gridcell.addClass('grid-others');
                    gridcell.text(board[j][i]);
                    gridcell.animate({ opacity: '1' }, time);
                    break;
            }
        }
    }

}

function showGridCell(p, index) {
    var gridcell = $('.game-container>div:nth-child(' + index + ')>span:nth-child(2)');
    gridcell.removeClass();// 当前小格子移除所有class
    switch (p.n) {// 小格子根据值添加class
        case 2:
            gridcell.addClass('grid-2');
            gridcell.text(2);
            break;
        case 4:
            gridcell.addClass('grid-4');
            gridcell.text(4);
            break;
        default:
            gridcell.addClass('grid-cell-def');
            gridcell.text('');
            break;
    }
    gridcell.animate({ opacity: '1' }, time);
}

// 随机生成数字2或4:出现概率95:5
function randomGenerateNumber() {
    // 0.0 ~ 1.0 之间的一个伪随机数。
    let r = Math.random();
    if (r >= 0.0 && r <= 0.95) {
        return 2;
    } else {
        return 4;
    }
}

// 随机位置点对象
function randomPosition() {
    this.x = parseInt(Math.floor(Math.random() * 4));// 行号
    this.y = parseInt(Math.floor(Math.random() * 4));// 列号
    this.n = parseInt(randomGenerateNumber());// 随机数字
}
// js中的方法重写技巧
randomPosition.prototype.toString = function () {
    return '随机位置点 = (' + this.x + ',' + this.y + ',' + this.n + ')';
}