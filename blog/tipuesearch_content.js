var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 第七組協同倉儲 課程倉儲: https://github.com/40423222/2017springcd_bg7 課程投影片 https://40423222.github.io/2017springcd_bg7/ 課程網誌:： http://40423222.github.io/2017springcd_bg7/blog/ 組員倉儲： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員網誌： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員投影片： 40423202 40423221 40423222 40423228 40423245 40423248 40423251"},{"url":"./midterm-collaboration-evaluation.html","tags":"Course","title":"2017/04/19 期中協同查驗與自評","text":"以下為協同產品設計實習 2017 Spring 期中考週的四個實習查驗題目. 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(5): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/W9/Length=50.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar2\"] container1 = doc['container2'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/W9/Length=45.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()"}]};