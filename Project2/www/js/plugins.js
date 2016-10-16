// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"ChangeTileSize","status":false,"description":"48x48以外のグリッドサイズのマップを使用可能にします。","parameters":{"Tile Size":"32","Tileset Image Folder":"img/tilesets/","Parallax Image Folder":"img/parallaxes/"}},
{"name":"AltMenuScreen","status":true,"description":"メニュー画面のレイアウトを変更します。","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"Ver 1.34 戦闘システムをカスタムし、様々な要素を変更することができます","parameters":{"---一般---":"","Action Speed":"agi","Default System":"dtb","---逃走---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---アニメーション---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"0","Magical Animation":"51","Enemy Attack Animation":"1","Reflect Animation":"42","Motion Waiting":"false","---フロントビュー---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---サイドビュー---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Side Sprite Priority":"1","---スプライト---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---ダメージポップアップ---":"","Popup Duration":"90","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---ティックセッティング---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---ウィンドウセッティング---":"","Lower Windows":"false","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"false","Current Max":"false","---選択ヘルプ---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"自分","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"%1全員","Random Help Text":"%2 ランダムな %1","---エネミーセレクト---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---アクターセレクト---":"","Visual Actor Select":"true","---バトルログ---":"","Show Emerge Text":"true","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"false","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"false","Show Reflect Text":"false","Show Substitute Text":"false","Show Fail Text":"false","Show Critical Text":"true","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"SSEP_BattleSpeedUp","status":true,"description":"[ver1.51] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"2","BattleSpeed (Boost)":"2","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"12","Motion":"12","Balloon":"12","Damage":"90","DamageMin":"60","--BattleLog Setting--":"","LogAnime BaseDelay":"8","LogAnime NextDelay":"12","LogWaitCount Default":"1","LogWaitCount Boost":"1","---YEP BattleCore---":"","YEP Battle MotionWait":"5","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"2","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.04 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"0","Param Current Max":"false","Adjust Columns":"false","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"16"}},
{"name":"Torigoya_ReplaceDeadMember","status":false,"description":"戦闘中、死亡したメンバーを自動的に控えメンバーに入れ替えます。","parameters":{}},
{"name":"TouchUI","status":true,"description":"UIをタッチ操作に適したものへ変更します。","parameters":{"Menu Command Text":"メニュー","Previous Command Text":"前","Next Command Text":"次"}},
{"name":"YEP_PartySystem","status":true,"description":"v1.08 Replaces the default 'Formation' command with a new\nmenu for players to easily change party formations.","parameters":{"---General---":"","Max Battle Members":"4","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"0","Maximum Followers":"4","EXP Distribution":"true","---Menu---":"","Help Window":"false","Text Alignment":"center","Change Command":"入れ替え","Remove Command":"外す","Revert Command":"元に戻す","Finish Command":"完了","---Selection---":"","Empty Text":"- Empty -","Actor Face":"true","Actor Sprite":"true","---List---":"","Remove Text":"Remove","Remove Icon":"16","Sprite Y Buffer":"16","In Party Text Color":"6","---Locking---":"","Lock First Actor":"false","Locked Icon":"195","Required Icon":"205","---Detail Window---":"","Enable Detail Window":"true","List Width":"300","Actor Parameters":"Parameters","Actor Equipment":"Equipment"}},
{"name":"TDDP_ManageDashing","status":true,"description":"1.0.1 Lets you manage the dashing mode in your game with simple plugin options.","parameters":{"Disable Auto-dash":"false","Force Dashing":"true","Disable Dashing":"false","Remove Always Dash Option":"false"}},
{"name":"liply_LoopPointPatch","status":false,"description":"","parameters":{}}
];