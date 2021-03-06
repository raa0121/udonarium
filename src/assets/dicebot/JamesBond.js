/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$>=', '$floor', '$/', '$+', '$<=', '$*']);
  return (function($base, $super, $parent_nesting) {
    function $JamesBond(){};
    var self = $JamesBond = $klass($base, $super, 'JamesBond', $JamesBond);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_JamesBond_gameName_1, TMP_JamesBond_gameType_2, TMP_JamesBond_getHelpMessage_3, TMP_JamesBond_check_1D100_4;

    
    
    Opal.defn(self, '$gameName', TMP_JamesBond_gameName_1 = function $$gameName() {
      var self = this;

      return "ジェームズ・ボンド007"
    }, TMP_JamesBond_gameName_1.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_JamesBond_gameType_2 = function $$gameType() {
      var self = this;

      return "JamesBond"
    }, TMP_JamesBond_gameType_2.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_JamesBond_getHelpMessage_3 = function $$getHelpMessage() {
      var self = this, info = nil;

      return (info = "" + "・1D100の目標値判定で、効果レーティングを1～4で自動判定。\n" + "　例）1D100<=50\n" + "　　　JamesBond : (1D100<=50) → 20 → 効果3（良）\n")
    }, TMP_JamesBond_getHelpMessage_3.$$arity = 0);
    return (Opal.defn(self, '$check_1D100', TMP_JamesBond_check_1D100_4 = function $$check_1D100(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this, base = nil;

      
      if ($truthy(signOfInequality['$==']("<="))) {
        } else {
        return ""
      };
      if ($truthy($rb_ge(total_n, 100))) {
        return " ＞ 失敗"};
      base = $rb_divide($rb_plus(diff, 9), 10).$floor();
      if ($truthy($rb_le(total_n, base))) {
        return " ＞ 効果1（完璧）"};
      if ($truthy($rb_le(total_n, $rb_times(base, 2)))) {
        return " ＞ 効果2（かなり良い）"};
      if ($truthy($rb_le(total_n, $rb_times(base, 5)))) {
        return " ＞ 効果3（良）"};
      if ($truthy($rb_le(total_n, diff))) {
        return " ＞ 効果4（まあまあ）"};
      return " ＞ 失敗";
    }, TMP_JamesBond_check_1D100_4.$$arity = 8), nil) && 'check_1D100';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
