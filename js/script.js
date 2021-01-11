'use strict';

$(function() {
  let start_btn_height;

// サイト中盤からヘッダーを固定する
  $(window).on('scroll', function() {
    start_btn_height = $('.start_eye_catch_area').offset().top;
    if (
      $(window).scrollTop() > 600 &&
      $(window).scrollTop() < start_btn_height - 500
    ) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });

// タブレット・スマホ状態(959px以下)でヘッダー一覧を表示する
  $('.header_detail_open_icon').click(function() {
    $('.header_detail_area').slideDown();
    $('#modal_overlay').css('display', 'block');
  });

// タブレット・スマホ状態(959px以下)でヘッダー一覧を非表示にする
  $('.header_detail_close_icon').click(function() {
    $('.header_detail_area').slideUp();
    $('#modal_overlay').css('display', 'none');
  });

// 新規登録モーダル・ログインモーダルを表示する
  $('.start_btn').click(function() {
    $('.start_modal').css('display', 'block');
    $('#modal_overlay').css('display', 'block');
  });

// 新規登録モーダル・ログインモーダルを非表示にする
  $('.close_btn').click(function() {
    $('.start_modal').css('display', 'none');
    $('#modal_overlay').css('display', 'none');
  });

// 新規登録モーダル・ログインモーダルを切り替える
  $('.form_change_btn').click(function() {
    if ($(this).hasClass('form_change_login')) {
      $('.login_modal').css('display', 'block');
      $('.sign_up_modal').css('display', 'none');
    } else {
      $('.sign_up_modal').css('display', 'block');
      $('.login_modal').css('display', 'none');
    }
  });

// よくある質問の質問の答えを開閉する
  $('.ques_item_head').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next('.ques_answer').slideUp();
      $(this).find('.open_icon').text('+');
    } else {
      $(this).addClass('open');
      $(this).next('.ques_answer').slideDown();
      $(this).find('.open_icon').text('×');
    }
  });
})