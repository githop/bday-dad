document.addEventListener('DOMContentLoaded', function () { return new App(); });
function shuffle(arr) {
    var ci = arr.length, randomIndex;
    while (0 !== ci) {
        randomIndex = Math.floor(Math.random() * ci);
        ci -= 1;
        _a = [arr[randomIndex], arr[ci]], arr[ci] = _a[0], arr[randomIndex] = _a[1];
    }
    return arr;
    var _a;
}
var App = /** @class */ (function () {
    function App() {
        this.bdayMessages = [
            'Greg, Karen, and I love you! <span>♥</span>',
            'Be as loud as you want when eating! <span>🍽</span>',
            'You are a big impact on my life! <span>✨</span>',
            'Mom (your wife) is Awesome! <span>💏</span>',
            'Da Paw is loved by the grandkids! <span>👴</span>',
            'Great golfer! (hole in one in the bag) <span>🏌</span>',
            'You have great intiuition, personal and business <span>👁️‍🗨️</span>',
            'Oldest Brother and pillar of an amazing family <span>🏛</span>',
            'Great sense of humor! <span>🤣</span>',
            'Will ask funny questions when filming you <span>🎬</span>',
            'Loves speaking to strangers! <span>🙃</span>',
            'Always around for us as kids <span>👪</span>',
            'Fun to travel with! <span>🛫</span>'
        ];
        this._bdMsgQueue = [];
        this._timeoutLn = 2500;
        this.flame = document.querySelector('.flame');
        this.cake = document.querySelector('.cake');
        this.bdayMessage = document.querySelector('.bday-message__text');
        this._attachListeners();
    }
    App.prototype.onCakeClick = function (e) {
        this.getBdayMessage();
        this._toggleVisibility();
    };
    App.prototype.getBdayMessage = function () {
        //reset if necessary
        if (this._bdMsgQueue.length === 0) {
            this._bdMsgQueue = this.bdayMessages.slice();
        }
        //randomize list
        shuffle(this._bdMsgQueue);
        this.bdayMessage.innerHTML = this._bdMsgQueue.pop();
    };
    App.prototype._toggleVisibility = function () {
        var _this = this;
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this.flame.classList.add('--hidden');
        this.bdayMessage.classList.remove('--hidden');
        this._timeout = setTimeout(function () {
            _this.flame.classList.remove('--hidden');
            _this.bdayMessage.classList.add('--hidden');
        }, this._timeoutLn);
    };
    App.prototype._attachListeners = function () {
        var _this = this;
        this.cake.addEventListener('click', function (e) { return _this.onCakeClick(e); });
    };
    return App;
}());
