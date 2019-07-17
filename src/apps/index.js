import 'babel-polyfill';
import { Game } from '../game';

let gamer = null;

function setup () {
  // 初始化游戏运行程序
  gamer = new Game('.game');
  // 设置runner为全局变量 方便运行时调试
  window.gamer = gamer;
  // 初始化游戏中的所有内容并开始游戏
  gamer.init();
}

document.addEventListener('DOMContentLoaded', setup);