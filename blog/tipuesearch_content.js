var tipuesearch = {"pages":[{"title":"About","tags":"misc","text":"2017Spring 機械設計工程系協同產品設計實習 第七組協同倉儲 課程倉儲: https://github.com/40423222/2017springcd_bg7 課程投影片 https://40423222.github.io/2017springcd_bg7/ 課程網誌:： http://40423222.github.io/2017springcd_bg7/blog/ 組員倉儲： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員網誌： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員投影片： 40423202 40423221 40423222 40423228 40423245 40423248 40423251","url":"./pages/about/"},{"title":"2017/04/19 期中協同查驗與自評","tags":"Course","text":"以下為協同產品設計實習 2017 Spring 期中考週的四個實習查驗題目. 1. 理解 Trace Point的程式碼，並將其繪製於網誌上 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math # 導入 fourbar import fourbar # 準備繪圖畫布 canvas = doc[\"fourbar\"] ctx = canvas.getContext(\"2d\") # y 軸向上移動 pixel 數 y_lift = 150 # 將 y 轉為向上為正 def newy(y): return (canvas.height - y - y_lift) # 所有尺寸放大倍數 ratio = 4 # 畫線函式 def line(ctx, ax, ay, bx, by, width=1, color='blue'): ctx.beginPath() ctx.strokeStyle = color ctx.lineWidth = width # 直接轉換 y 座標 ctx.moveTo(ax*ratio, newy(ay*ratio)) ctx.lineTo(bx*ratio, newy(by*ratio)) ctx.stroke() ctx.closePath() def getT(x1, y1, x2, y2): x = x2 - x1 y = y2 - y1 if (math.fabs(x) < math.pow(10,-100)): if(y < 0.0): return (-math.pi/2) else: return (math.pi/2) else: return math.atan2(y, x) def link(ctx, ax, ay, bx, by, width=1, color='blue'): hole = 5 radius = 10 length = math.sqrt((ax*ratio-bx*ratio)**2+(newy(ay*ratio)-newy(by*ratio))**2) # 儲存先前的繪圖狀態 ctx.save() ctx.translate(ax*ratio, newy(ay*ratio)) ctx.rotate(-math.pi*0.5 + getT(ax*ratio, newy(ay*ratio), bx*ratio, newy(by*ratio))) # 必須配合畫在 y 軸上的 Link, 進行座標轉換, 也可以改為畫在 x 軸上... ctx.beginPath() ctx.strokeStyle = color ctx.lineWidth = width ctx.moveTo(0,0) ctx.arc(0, 0, hole, 0, 2*math.pi, True) ctx.stroke() ctx.moveTo(0,length) ctx.beginPath() ctx.arc(0,length, hole, 0, 2*math.pi, True) ctx.stroke() ctx.moveTo(0,0) ctx.beginPath() ctx.arc(0,0, radius, 0, math.pi, True) ctx.moveTo(0+radius,0) ctx.lineTo(0+radius,0+length) ctx.stroke() ctx.moveTo(0,0+length) ctx.beginPath() ctx.arc(0, 0+length, radius, math.pi, 0, True) ctx.moveTo(0-radius,0+length) ctx.lineTo(0-radius,0) ctx.stroke() ctx.restore() degree = math.pi/180 ax = 60 ay = 0 bx = 120 by = 0 bac = 0 ac = 30 cd = 50 db = 60 ce = 50 ed = 50 # 利用 fourbar 物件建立案例 f = fourbar.fourbar(ax = 60, ay = 0, bx = 120, by = 0, bac = 0, ac = 30, cd = 50, db = 60, ce = 50, ed = 50) # 兩條軸線 #line(ctx, 0, 0, 0, 100, 3, 'blue') #line(ctx, 0, 0, 100, 0, 3, 'blue') # base line #line(ctx, ax, ay, bx, by, 3, 'red') f.bac = 0 for j in range(10): f.ce = 50 - j *3 # link1 link(ctx, f.ax, f.ay, f.cx, f.cy, 1, 'blue') # link2 link(ctx, f.cx, f.cy, f.dx, f.dy, 1, 'blue') # link3 link(ctx, f.dx, f.dy, f.bx, f.by, 1, 'blue') # triangle sides line(ctx, f.cx, f.cy, f.ex, f.ey, 1, 'black') line(ctx, f.dx, f.dy, f.ex, f.ey, 1, 'black') # 進入 e 點輪廓繪製流程 # f.bac = 0 開始繪圖 # 直接轉換 y 座標 ctx.moveTo(f.ex*ratio, newy(f.ey*ratio)) ctx.beginPath() ctx.strokeStyle = 'red' ctx.lineWidth = 1 for i in range(0, 365, 5): f.bac = i *degree ctx.lineTo(f.ex*ratio, newy(f.ey*ratio)) ctx.stroke() ctx.closePath()","url":"./midterm-collaboration-evaluation.html"}]};