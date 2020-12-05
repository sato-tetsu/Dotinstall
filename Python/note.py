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


# 標準入力

# 1行に1つの文字　例：5
box = input()		# 5を取得し、boxに値を入れる
print(box)			# 出力 5

# 1行に1つの整数の入力を取得し、整数として出力　例：i
box = int(input())	# iを取得し、boxにいれる
print(box)			# 出力 i

# 1行に複数に入力値を取得し、出力する　例：s_1 s_2
box = input().split()	# s_1 s_2を分割、取得し、boxにいれる
print(box)				# 出力　['s_1', 's_2']
print(box[0])			# 出力　s_1
print(box[1])			# 出力　s_2

# 1行に複数の整数の入力を取得し、整数として出力する　例：s_1 s_2
box = list(map(int, input().split()))	# s_1 s_2を分割、取得し、boxにいれる
print(box[0])			# 出力　s_1
print(box[1])			# 出力　s_2





