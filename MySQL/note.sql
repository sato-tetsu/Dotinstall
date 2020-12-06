-- SELECT テーブルからデータを取得する記述
SELECT 5 + 5;

-- CREATE TABLE テーブルを作成する記述
-- posts テーブルの名前が入る
CREATE TABLE posts (
  -- mesage 変数名　　VARCHAR データ型
  message VARCHAR(140), likes INT
);

-- 作成済みのテーブルを削除する方法  postsがテーブル名
DROP TABLE IF EXISTS posts;












-- データ型
-- 整数
TINYINT				-- -128 ~ +127
TINYINT UNSIGNED	-- 0 ~ 255
INT					-- -21億 ~ +21億
INT UNSIGNED		-- 0 ~ 42億
BIGINT				-- -922京 ~ +922京
BIGINT UNSIGNED		-- 0 ~ 1844京
-- 実数
DECIMAL				-- 固定小数点
FLOAT				-- 浮動小数点
DOUBLE				-- 浮動小数点（高精度）
-- 文字列
CHAR				-- 0 ~ 255文字
VARCHAR 			-- 0 ~ 65535文字
TEXT				-- それ以上
ENUM				-- 特定の文字列からひとつ
SET  				-- 特定の文字列から複数
-- 真偽値
BOOL
