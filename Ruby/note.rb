# gets ユーザーがキーボードで入力した値を文字列として取得するメソッド
x = gets

# chomp 文字列オブジェクトの末尾についた改行を取り除く
x = gets.chomp

# to_i 数値の文字列オブジェクトを整数に変更する
x = gets

# 配列の最初の数値を取り出す。最後の数値を取り出す。任意の数値を取り出す。
x = box.first
x = box.last

# split 文字列を分解する
x = "Tokyo,Osaka,Nagoya,Fukuoka"
box = x.split(",")

# gsub 任意の文字を変換
x.gsub(/a/, b)

# times 繰り返し処理  variable 変数
x.times do |variable|
  繰り返し処理
end

# 条件分岐 thenでつなぐ
if x < 0 then

  elsif x > 0 then

  else

end

# 標準入力 複数
box = []
while date = gets
    box << date.split(" ").map(&:to_i)
end

# 配列へのアクセス
x = box[0][0]   #0行目の0列目
x = box[0][1]   #0行目の1列目
x = box[1][1]   #1行目の0列目
x = box[1][1]   #1行目の1列目

