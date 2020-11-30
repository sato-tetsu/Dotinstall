# 文字列を変数に格納
s = "文字列"

# 文字列中の特殊文字
# \nは改行
s = "文字\n列"
# \tはタブ
t = "文字\t列"

# 改行を保持
text = """<html>
<body></body>
<html>"""

# 数値　整数
i = 10

# 数値　浮動小数点
f = 23.4

# 論理値
flag = True



# メソッド
# 出力
print()

# 文字列に値を埋め込む
print("name: %s, score: %f" % (name, score))
print("name: {0}, score: {1}}".format(name, score))