import { nanoid } from "nanoid";
const Topic_list = [
    {//Chapter 9
        id: nanoid(),
        title: '顧客關係管理是指?',
        answer: 4,
        options:['只有銷售(Sales)與行銷(Marketing)','全部皆非','只有企業流程電腦化','有效的運用資訊科技和顧客流程']
    },
    {
        id: nanoid(),
        title: '銷售訂單子模組功能是指有關?',
        answer: 3,
        options:['從工程BOM,客戶訂單管理,產品生產交期等','從料件建立,客戶訂單管理,產品生產交期等','從詢報價,客戶訂單管理,產品生產交期等','從詢報價,物料採購管理,產品生產交期等']
    },
    {
        id: nanoid(),
        title: '下列何者不是業務出貨配送的注意原則?',
        answer: 3,
        options:['出貨效率','出貨的正確性','全部皆非','出貨成本']
    },
    {
        id: nanoid(),
        title: '銷售自動化作業的系統功能應屬於何者資訊系統?',
        answer: 1,
        options:['CRM','SCM','ERP','全部皆是']
    },
    {
        id: nanoid(),
        title: '競賽促銷作業的系統功能應屬於何者資訊系統?',
        answer: 1,
        options:['CRM','SCM','ERP','全部皆是']
    },
    {
        id: nanoid(),
        title: '管理客戶的訂單資料,目的要了解甚麼?',
        answer: 4,
        options:['客戶信用','何種產品對何種客戶是有利潤的','何種客戶對企業是忠誠的','全部皆是']
    },
    {
        id: nanoid(),
        title: '漏斗管理作業的系統功能應屬於何者資訊系統?',
        answer: 1,
        options:['CRM','SCM','ERP','全部皆是']
    },
    {
        id: nanoid(),
        title: 'CRM系統建構過程時,有關資訊發展會有那些程序?',
        answer: 3,
        options:['資訊收集(Data Collection)','資訊儲存(Data Storage)','全部皆是','資訊分析(Data Analysis)']
    },
    {
        id: nanoid(),
        title: '詢報價的產品價格組合定義,牽扯到什麼?',
        answer: 3,
        options:['產品單位的計算','產品重量的計算','產品利潤的計算','全部皆非']
    },
    {
        id: nanoid(),
        title: '在產品問題客訴的整個作業過程中,有以下問題情形?',
        answer: 4,
        options:['上下游的責任單位互不清楚','所耗時間太長','整個作業過程緊密','以上皆是']
    },{
        id: nanoid(),
        title: '在配送安排中,是指?',
        answer: 4,
        options:['客戶對產品問題的退回維修作業','貨品送達到客戶','如何送達到客戶','全部皆是']
    },
    {
        id: nanoid(),
        title: '訂單作業的系統功能應屬於何者資訊系統?',
        answer: 3,
        options:['CRM','SCM','ERP','全部皆是']
    },
    {
        id: nanoid(),
        title: '出貨區產品周轉率高,和什麼有密切的關係?',
        answer: 4,
        options:['全部皆是','工作作息時間','產品出貨時間','現場呆滯品的整頓,消化']
    },
    {
        id: nanoid(),
        title: '下列何者是業務出貨配送的注意原則?',
        answer: 1,
        options:['全部皆是','出貨成本','出貨的正確性','出貨效率']
    },
    {
        id: nanoid(),
        title: '在裝箱撿貨作業中,出貨的正確資料是由什麼部門主控出貨?',
        answer: 4,
        options:['倉庫','會計部','生產部','業務部']
    },
    {
        id: nanoid(),
        title: 'CRM系統在網路上的需求衡量是在於?',
        answer: 3,
        options:['上網次數','註冊顧客','全部皆是','顧客的互動深度']
    },
    {
        id: nanoid(),
        title: '顧客行銷演進有?',
        answer: 2,
        options:['大眾行銷','全部皆是','1對1行銷','目標行銷']
    },
    {
        id: nanoid(),
        title: '下列何者不是顧客關係的應用範圍?',
        answer: 3,
        options:['企業間電子化系統','企業內電子化系統','顧客的互動深度','全部皆非']
    },
    {
        id: nanoid(),
        title: '業務訪談紀錄作業的系統功能應屬於何者資訊系統?',
        answer: 4,
        options:['全部皆是','ERP','SCM','CRM']
    },
    {//Chapter 10
        id: nanoid(),
        title:'資訊擷取作業,主要是?',
        answer: 1,
        options:['全部皆是','透過連線,來從公司資訊系統存取相關資訊','自動關聯相關跨區域資訊','建立一個平台']
    },{
        id: nanoid(),
        title: '企業體系間電子化的目的就是?',
        answer: 1,
        options:['整合','統計','分析','全部皆是']
    },
    {
        id: nanoid(),
        title: '企業內部的資訊系統應用功能是指?',
        answer: 4,
        options:['全部皆是','Internet','Extranet','Intranet']
    },
    {
        id: nanoid(),
        title: '下列何者是供應鏈內容?',
        answer: 2,
        options:['計畫','採購','製造','全部皆是']
    },
    {
        id: nanoid(),
        title: '採購執行的系統功能是屬於何者資訊系統?',
        answer: 4,
        options:['ERP','全部皆是','CRM','SCM']
    },
    {
        id: nanoid(),
        title: '偶發醒需求是屬於',
        answer: 3,
        options:['二者皆有','全部皆是','獨立需求項目','依賴需求項目']
    },
    {
        id: nanoid(),
        title: '供應鏈的多國性作業包括?',
        answer: 2,
        options:['企業運作資訊化趨勢','某國的整合性作業','同質資料庫','全部皆是']
    },
    {
        id: nanoid(),
        title: 'SCOR包含多少個層次?',
        answer: 4,
        options:['全部皆是','2','3','4']
    },
    {
        id: nanoid(),
        title: 'DCOR包含多少個層次?',
        answer: 4,
        options:['全部皆是','2','3','4']
    },
    {
        id: nanoid(),
        title: '企業功能的延伸經營包含?',
        answer: 2,
        options:['維修服務據點','全部皆是','行銷據點','代工生產據點']
    },
    {
        id: nanoid(),
        title: '售後服務的系統功能是屬於何者資訊系統',
        answer: 1,
        options:['CRM','SCM','全部皆是','ERP']
    },{
        id: nanoid(),
        title: '定義設計鍊成員協同型態的設計流程是指第幾個層次?',
        answer: 2,
        options:['2','3','全部皆是','4']
    },
    {
        id: nanoid(),
        title: '設計鏈營運模式的重點範圍是指第幾個層次?',
        answer: 2,
        options:['2','3','全部皆是','4']
    },
    {
        id: nanoid(),
        title: '供應鏈作業包含哪些?',
        answer: 3,
        options:['採購執行','需求預測','全部皆是','採購追蹤']
    },
    {
        id: nanoid(),
        title: 'DCOR包含多少個協同設計層次?',
        answer: 4,
        options:['全部皆是','2','3','4']
    },
    {
        id: nanoid(),
        title: '採購計畫的系統功能是屬於何者資訊系統?',
        answer: 4,
        options:['ERP','全部皆是','CRM','SCM']
    },
    {
        id: nanoid(),
        title: '何謂資訊流?',
        answer: 2,
        options:['指企業之間和銀行的金額往來','從資訊系統應用功能所運作的過程','實體的流動','全部皆是']
    },
    {
        id: nanoid(),
        title: '電子化採購(E-Procurement)可分成三大方向?',
        answer: 2,
        options:['採購作業','全部皆是','採購回饋','採購規劃']
    },
    {
        id: nanoid(),
        title: '產業特性是指第幾個層次?',
        answer: 2,
        options:['全部皆是','2','3','4']
    },
    {
        id: nanoid(),
        title: '先進生產排程的系統功能是屬於何者資訊系統?',
        answer: 4,
        options:['CRM','全部皆是','ERP','SCM']
    },
    {
        id: nanoid(),
        title: '電子化採購包含?',
        answer: 4,
        options:['Qualification','collaboration','Sourcing','全部皆是']
    },{//Chpater11
        id: nanoid(),
        title: '知識的獲取循環過程包含模組?',
        answer: 3,
        options:['知識來源identify','知識擷取','全部皆是','知識介面']
    },
    {
        id: nanoid(),
        title: '下列何者是知識管理生命週期的重點?',
        answer: 2,
        options:['檔案共享','知識蓄集','資料儲存','全部皆是']
    },
    {
        id: nanoid(),
        title: 'e-learning功能是何種資訊系統?',
        answer: 2,
        options: ['ERP', 'KM', 'SCM', 'CRM']
    },
    {
        id: nanoid(),
        title: '下列何者不是技術進展的內涵?',
        answer: 3,
        options:['持續演化的過程','重新進行另一個新技術的演化','不會中斷','不連續的技術改變所中斷']
    },
    {
        id: nanoid(),
        title: '在知識的源頭構面中,其企業有分成的構面是指?',
        answer: 1,
        options:['全部皆是','外部','內部和外部','內部']
    },
    {
        id: nanoid(),
        title: '下列何者不是知識螺旋的重點?',
        answer: 3,
        options:['共同化與內化','外化','全部皆非','結合']
    },
    {
        id: nanoid(),
        title: '資訊是指?',
        answer: 4,
        options:['全部皆是','價值的內容','原始事實','意義的事實']
    },
    {
        id: nanoid(),
        title: '下列何者是知識螺旋的內涵',
        answer: 3,
        options:['結合','外化','全部皆是','內化']
    },
    {
        id: nanoid(),
        title: '建構一個網路組織平台,有彈性變動的變形蟲組織和組織性學習是何種創新?',
        answer: 4,
        options:['全部皆是','流程創新','策略創新','組織創新']
    },
    {
        id: nanoid(),
        title: '知識庫功能是何種資訊系統?',
        answer: 2,
        options:['SCM','KM','ERP','CRM']
    },{
        id: nanoid(),
        title: '在網路組織結構下,由互相連結的上下游「層」單元所組成的企業組織模式,請問這是什麼組織?',
        answer: 4,
        options:['全部皆非','虛擬組織','扁平組織','超連結組織']
    },
    {
        id: nanoid(),
        title: '下列何者是知識經濟的標竿?',
        answer: 1,
        options:['全部皆是','創新容量','終身學習','彈性自足']
    },
    {
        id: nanoid(),
        title: '下列何者不是知識螺旋的內涵',
        answer: 1,
        options:['外部','外化','全部皆是','內化']
    },
    {
        id: nanoid(),
        title: '資訊檢索功能是何種資訊系統?',
        answer: 3,
        options:['ERP','CRM','KM','SCM']
    },
    {
        id: nanoid(),
        title: '下列何者不是資訊科技工具?',
        answer: 4,
        options:['全部皆是','知識庫之分類編碼','資料倉儲','企業文件資料庫']
    },
    {
        id: nanoid(),
        title: '下列何者不是Wayne Applehan知識管理系統的重點?',
        answer: 4,
        options:['介面層','智慧層','存取層','結合層']
    },
    {
        id: nanoid(),
        title: '下列何者不是知識來源管道環境?',
        answer: 4,
        options:['資料的專業','資料的系統','資料的路徑','全部皆非']
    },
    {
        id: nanoid(),
        title: '下列何者不是知識管理系統例子?',
        answer: 2,
        options:['協同電子會議系統','交易處理系統','全部皆非','群組軟體']
    },
    {
        id: nanoid(),
        title: '下列何者不是知識管理流程內容',
        answer: 1,
        options:['物品流通','知識獲取','知識創造','全部皆是']
    },
    {//Chapter12
        id: nanoid(),
        title: '網路行銷是指?',
        answer: 4,
        options:['e-marketing','電子化行銷','泛指運用任何整合性科技來達到行銷目的','全部皆是']
    },{
        id: nanoid(),
        title: '對企業而言,網路行銷分析是用來分析什麼的功能?',
        answer: 4,
        options:['全部皆非','滿足行銷者需要','滿足企業廠商需要','滿足消費者需要']
    },
    {
        id: nanoid(),
        title: '「有意願經常性購買」的消費者對於什麼效果是非常重視的?',
        answer: 1,
        options:['展開的網站功能與互動溝通','全部皆是','電子郵件','網站感覺與整合程度']
    },
    {
        id: nanoid(),
        title: '行銷組合(Marketing mix)包含下列哪一項?',
        answer: 2,
        options:['產品','全部皆是','通路','促銷']
    },
    {
        id: nanoid(),
        title: 'Web Service是指什麼?',
        answer: 2,
        options:['應用功能','網路服務','全部皆是','軟體產品']
    },
    {
        id: nanoid(),
        title: '電子商務是採取何種資訊技術',
        answer: 1,
        options:['Internet','主從架構','全部皆是','2-Tier']
    },
    {
        id: nanoid(),
        title: '網際網路行銷與傳統行銷有很大的差異?',
        answer: 4,
        options:['傳統行銷是在於高互動行銷','傳統行銷是在於個人化行銷','傳統行銷是在於小量行銷','傳統行銷是在於大量行銷']
    },
    {
        id: nanoid(),
        title: '下列何者是一種新的網路行銷例子',
        answer: 4,
        options:['one to one行銷','全部皆非','資料庫行銷','Blog行銷']
    },
    {
        id: nanoid(),
        title: '直效行銷是指?',
        answer: 2,
        options:['針對大眾化的需求','以期能獲得直接和立即的回應','間接與特定的消費者溝通','indirect marketing']
    },
    {
        id: nanoid(),
        title: '整合性行銷溝通是指?',
        answer: 2,
        options:['非系統化的過程','利用多樣化行銷工具,來達到行銷溝通','全部皆是','Integrated sale Communication']
    },
    {
        id: nanoid(),
        title: '電子商務與企業電子化在管理上不同之處?',
        answer: 1,
        options:['企業電子化則改變了企業與企業,顧客甚至供應商之間經營運作模式','企業電子化僅包含了電子商務','企業電子化僅包含買賣之商業行為','全部皆是']
    },{
        id: nanoid(),
        title: '網路行銷系統應如何取得,有哪些選擇?',
        answer: 1,
        options:['全部皆是','購置套裝軟體','委外設計開發','自行開發']
    },
    {
        id: nanoid(),
        title: '網際網路市場對消費者來說具有某些特性?',
        answer: 2,
        options:['極大化','無縫隙的介面','全部皆是','獨立性']
    },
    {
        id: nanoid(),
        title: '網路行銷重點?',
        answer: 1,
        options:['在企業經營模式的另一延伸','取代實體行銷','全部皆非','只是在網路網路上做行']
    },
    {
        id: nanoid(),
        title: 'E-payment是屬於何種資訊系統',
        answer: 1,
        options:['電子商務','ERP','KM','SCM']
    },
    {
        id: nanoid(),
        title: '電子市集是屬於何種資訊系統?',
        answer: 4,
        options:['KM','ERP','SCM','電子商務']
    },
    {
        id: nanoid(),
        title: '行銷的過程時期有哪些?',
        answer: 4,
        options:['行銷導向','生產導向','銷售導向','全部皆是']
    },
    {
        id: nanoid(),
        title: '網路購物網站是屬於何種資訊系統?',
        answer: 2,
        options:['SCM','電子商務','KM','ERP']
    },
    {
        id: nanoid(),
        title: '網際網路行銷與傳統行銷有很大的差異?',
        answer: 1,
        options:['網路行銷是在於有互動的性質','網路行銷是在於大眾行銷','網路行銷是在於少量行銷','網路行銷是在於大量行銷']
    },
    {
        id: nanoid(),
        title: 'Extranet Internet Intranet這三種最大的差異是?',
        answer: 4,
        options:['Internet以企業內部為中心','全部皆非','Intranet對外角色產生應用功能','Internet是企業和另一企業的交易作業']
    },
    {//Chapter13
        id: nanoid(),
        title: '防火牆功能是屬於何者議題的內容?',
        answer: 3,
        options:['協同分享','企業流程自動化','網路安全','客戶關係']
    }, {
        id: nanoid(),
        title: '因應安全措施有?',
        answer: 1,
        options: ['全部皆是', '偵測', '預防','限制']
    },
    {
        id: nanoid(),
        title: '防毒軟體功能是屬於何者議題的內容?',
        answer: 3,
        options:['協同分享','企業流程自動化','網路安全','客戶關係']
    },
    {
        id: nanoid(),
        title: '下列何者是IP Spoofing的內容?',
        answer: 4,
        options:['伺服器癱瘓','網路不穩','小量的發散','全部皆是']
    },
    {
        id: nanoid(),
        title: '下列何者不是分散式系統的內容?',
        answer: 1,
        options:['全部皆是','資料分散於各地子系統','透過子系統做連接整合','二個以上子系統']
    },
    {
        id: nanoid(),
        title: 'TRUSTe(www.truste.org)乃是1996年的重點?',
        answer: 3,
        options:['一個營利團體','不保證會濫用其個人資料','標章(seals)','資訊主席']
    },
    {
        id: nanoid(),
        title: '電腦病毒要發作徵兆有?',
        answer: 3,
        options:['當機','執行程式的速度變慢','全部皆是','畫面出現不明訊息']
    },
    {
        id: nanoid(),
        title: '在技術安全之議題上,是指怎樣的情況?',
        answer: 4,
        options:['全部皆是','人為破壞','人為管理不當','網路技術管理不當或有漏洞']
    },
    {
        id:nanoid() ,
        title: 'PAPA有哪些?',
        answer: 4,
        options:['non-privacy','全部皆非','人格權','所有權']
    },
    {
        id:nanoid() ,
        title: '下列何者是數位簽章的效果?',
        answer: 1,
        options:['不可否認性','資料完整性','識別傳送端','全部皆是']
    },
    {
        id:nanoid() ,
        title: '造成網路安全威脅的因素有那些?',
        answer: 3,
        options:['病毒','全部皆非','兩者皆是','駭客']
    },
    {
        id:nanoid() ,
        title: '定期更新病毒碼功能是屬於何者議題的內容',
        answer: 2,
        options:['協同分享','網路安全','客戶關係','企業流程自動化']
    },
    {
        id:nanoid() ,
        title: '網路安全和MIS系統是否有關係?',
        answer: 4,
        options:['全部皆是','不是','不一定','是']
    },{
        id:nanoid() ,
        title: '何謂資訊安全?',
        answer: 2,
        options:['資訊上的危害,進而影響到個人和企業的利益','全部皆是','管理不當','人為故意的行為或資訊技術漏洞']
    },
    {
        id:nanoid() ,
        title: '何謂偽裝式攻擊(IP Spoofing)?',
        answer: 2,
        options:['全部皆是','造成網路或伺服器癱瘓','大量地散發垃圾報郵件','取得攻擊或入侵目標的相關資訊']
    },
    {
        id:nanoid() ,
        title: '道德問題會在資訊本身議題下造成隱私權,智慧財產權等風險,是屬於何者議題的內容?',
        answer: 1,
        options:['資訊倫理','協同分享','資訊安全','客戶關係']
    },
    {
        id:nanoid() ,
        title: '下列何者不是網路安全的技術',
        answer: 4,
        options:['網路程式供','作業系統','應用程式','全部皆非']
    },
    {
        id:nanoid() ,
        title: '對個人資訊的一種保密是指?',
        answer: 1,
        options:['隱私權','客戶關係','non-privacy','人格權']
    },
    {//Chapter 14
        id:nanoid() ,
        title: '請問管理資訊系統部門是什麼定位的部門組織?',
        answer: 2,
        options:['主要性','支援性定位','全部皆是','營利性']
    },
    {
        id:nanoid() ,
        title: '上線後成效做檢討,一般其問題點有?',
        answer: 4,
        options:['資料不完整','功能使用情況不理想','全部皆是','和導入前期望功能有所差距']
    },
    {
        id:nanoid() ,
        title: '企業需求分析作業是屬於何者部門作業?',
        answer: 1,
        options:['MIS部門','研發部門','財務部門','業務部門']
    },
    {
        id:nanoid() ,
        title: '預算作業是屬於和者部門作業?',
        answer: 3,
        options:['MIS部門','研發部門','財務部門','業務部門']
    },
    {
        id:nanoid() ,
        title: '人力資源的運作是?',
        answer: 1,
        options:['創新式的組織型態','無法自行解決問題','例行程序的作業','將員工視為成本']
    }, {
        id: nanoid(),
        title: '一般管理資訊系統部門範圍包含?',
        answer: 3,
        options:['部門結構','人員角色','全部皆是','工作職掌']
    },
    {
        id:nanoid() ,
        title: '下列何者不是庫存數量檢核的重點?',
        answer: 3,
        options:['確保可以如期交貨','以掌控對客戶的回應','產品的詢價','接單時查詢庫存可用量']
    },
    {
        id:nanoid() ,
        title: 'MIS部門人員的價值是在於?',
        answer: 3,
        options:['管理電腦','全部皆是','利用IT技術支援企業經營作業','IT技術']
    },
    {
        id:nanoid() ,
        title: '企業資訊可分成?',
        answer: 3,
        options:['全部皆非','外部資訊','內外部資訊皆是','內部資訊']
    },
    {
        id:nanoid() ,
        title: '上線後成效及問題檢討,包含哪些?',
        answer: 2,
        options:['問題解決','全部皆是','差異部分不解決','導入時程']
    },
    {
        id:nanoid() ,
        title: '每一個循環作業的檢核邏輯結果是否會影響下一個檢核邏輯步驟',
        answer: 3,
        options:['不會','沒有關係','會','全部皆是']
    },
    {
        id:nanoid() ,
        title: '下列何者不是設計階段的重點',
        answer: 2,
        options:['分析各個方案的影響','開發替代方案','決定決策準則,設計滿足限制條件的方案','歸納成邏輯規則']
    },
    {
        id:nanoid() ,
        title: '用軟體元件化的彈性是指?',
        answer: 1,
        options:['可來克服降低其企業需求作業的複雜變化性','全部皆是','風險就可降到最低','這是一種軟體工程技術方法論']
    },
    {
        id:nanoid() ,
        title: '影響決策的主要因素?',
        answer: 1,
        options:['全部皆是','決策行為模式','目標的定義和澄清','個人情緒與企業文化']
    },
    {
        id:nanoid() ,
        title: '電腦機房管理作業,是屬於何者部門作業?',
        answer: 1,
        options:['MIS部門','研發部門','財務部門','業務部門']
    },{
        id:nanoid() ,
        title: '在談ERP新系統導入時,就會因企業特有的專屬特性,所產生的功能,這就是指?',
        answer: 1,
        options:['差異部分不解決','標準化修改','企業需求和ERP新系統標準功能的差異部分','全部皆是']
    },
    {
        id:nanoid() ,
        title: '下列何者不是人力資源系統的廠商評估因素?',
        answer: 3,
        options:['系統功能','後續維護服務,系統風險評估等','價格','資訊趨勢']
    },
    {
        id: nanoid(),
        title: '下列何者不是導入後的可能問題現象?',
        answer: 1,
        options: ['全部皆是', '當初沒想到或以為有想到,但導入後有需要', '當初都有規劃到,導入後本身功能沒有問題,但卻影響到對其他功能的問題','當初有規劃,但導入後沒有問題']
    },
    {
        id:nanoid() ,
        title: '若以資訊系統的精神,來看內部控制制度,他的重點在於?',
        answer: 4,
        options:['文件化','純粹的稽核','全部皆是','企業落實內控的執行力']
    },
    {
        id:nanoid() ,
        title: '是否所有企業都需要類似MIS的單位組織?',
        answer: 2,
        options:['否','是','可有可無','全部皆是']
    },
    {//Chapter15
        id:nanoid() ,
        title: '資料庫和資料庫之間交換時的標準方式是?',
        answer: 1,
        options:['XML','HTML','全部皆是','WORD']
    },
    {
        id:nanoid() ,
        title: '共同行銷是屬於下列何者領域?',
        answer: 2,
        options:['全部皆是','策略聯盟','電子化企業','綠色企業']
    },
    {
        id:nanoid() ,
        title: '政府所推行的產業體系A,B,C,D,E計畫是否屬於電子化企業的領域?',
        answer: 1,
        options:['是','全部皆是','不是','不一定']
    },
    {
        id:nanoid() ,
        title: 'MES系統最主要是?',
        answer: 1,
        options:['全部皆是','生產執行活動效率化','一個快速而且即時的監控現場的活動','它包含工廠現場資訊取得與連結系統']
    },
    {
        id:nanoid() ,
        title: '電子化採購是屬於下列何者領域?',
        answer: 3,
        options:['全部皆是','策略聯盟','電子化企業','綠色企業']
    },
    {
        id:nanoid() ,
        title: '協同商務是屬於下列何者領域?',
        answer: 3,
        options:['全部皆是','策略聯盟','電子化企業','綠色企業']
    },
    {
        id:nanoid() ,
        title: '體系企業間電子化的重點有?',
        answer: 3,
        options:['建立體系廠商發展策略','簡化且快速資料交換介面,縮短廠商交貨時程等','全部皆是','預先規劃體系廠商產能及庫存']
    },{
        id:nanoid() ,
        title: '新的資訊系統環境和技術,是會造成什麼?',
        answer: 1,
        options:['全部皆是','須不斷學習','企業在資訊系統的解決方案多了選擇','在企業資訊系統的整合架構愈加複雜和困難']
    },
    {
        id:nanoid() ,
        title: '體系內電子化廠商依其企業之間電子化程度中的A類供應廠商關鍵是在於?',
        answer: 1,
        options:['企業之間的作業的標準化','全部皆是','共同資料交換','Web接收資料']
    },
    {
        id:nanoid() ,
        title: '電子化企業是因為何種技術而盛行的?',
        answer: 4,
        options:['資料庫技術','全部皆非','藍芽技術','網際網路']
    },
    {
        id:nanoid() ,
        title: '允諾交期是指?',
        answer:3,
        options:['可得知預計之交貨時間','使顧客在訂單時即可得知所有相關訂單資訊','全部皆是','ATP Available to Promise']
    },
    {
        id:nanoid() ,
        title: '下列何者是Sourcing的功能?',
        answer: 3,
        options:['全部皆是','採購開立','供應商詢估價作業','存貨控制']
    },
    {
        id: nanoid(),
        title: '體系內電子化廠商依其企業之間電子化程度中的A類供應廠商關鍵是以什麼方式連結?',
        answer: 4,
        options: ['全部皆是','FTP','web browser','AP to AP的方式']
    },
    {
        id:nanoid() ,
        title: '下列何者中英文描述是對的?',
        answer: 2,
        options:['網際網路Internet','全部皆是','企業內部網路Intranet','企業外網路Extranet']
    },
    {
        id:nanoid() ,
        title: '企業入口網站能夠提供什麼?',
        answer: 4,
        options:['外部顧客,供應商,和企業夥伴之間做溝通互動','更能夠提供管理者制定決策的相關支援','個人化的企業與其內部員工溝通','全部皆是']
    },
    {
        id:nanoid() ,
        title: '整個資訊系統的環境目前已轉換到什麼重點的新趨勢時,以及技術也相對變得複雜和困難的說明下,吾人可知過去是以?',
        answer: 4,
        options:['推銷為手法的手段模式','全部皆非','產品為核心的思考模式','解決方案與服務']
    },
    {
        id:nanoid() ,
        title: '上下游庫存資訊是指?',
        answer: 3,
        options:['透過資訊系統將產業上游體系的庫存資料庫整合','透過資訊系統將產業下游體系的庫存資料庫整合','透過資訊系統將產業上下游體系的庫存資料庫整合','透過資訊系統將企業各據點的庫存資料庫整合']
    },{
        id:nanoid() ,
        title: '客戶要的是?',
        answer: 2,
        options:['全部皆非','整體解決方案','故須由本身產品來加強企業所提供之價值','是單一的產品']
    },
    {
        id:nanoid() ,
        title: 'XML是指?',
        answer: 1,
        options:['全部皆是','eXtensible Markup Language','是一個讓不同文件能夠轉換給不同的介面去查詢,同時又很容易讓不同電腦程式去辨識的語言格式和語法','可延伸性標示語言']
    },
    {
        id:nanoid() ,
        title: '以EDI傳輸訂單資訊有什麼特色?',
        answer: 1,
        options:['建置成本高昂','反應速度快','全部皆非','開放型態']
    },
    {//Chapter16
        id:nanoid() ,
        title: 'Web-base協同研發商務系統強調?',
        answer: 1,
        options:['全部皆非','能快速地,正確地,關聯地得到彼此其所溝通一致性的資訊','企業內,供應商廠,客戶,企業夥伴成員等角色各自發展','主從平台應用']
    },
    {
        id:nanoid() ,
        title: '產業資源規劃的重點?',
        answer: 4,
        options:['產業鏈','企業之間資源','資源最佳化','全部皆是']
    },
    {
        id:nanoid() ,
        title: '何謂服務科技化?',
        answer: 3,
        options:['科技產品的服務過程','全部皆是','將服務流程輔助科技技術的運用','是一種科技產品']
    },
    {
        id:nanoid() ,
        title: '物聯網是什麼?',
        answer: 1,
        options:['Internet of Things','全部皆是','Wireless Sensor Networking','Network of Things']
    },
    {
        id:nanoid() ,
        title: 'EPCglobal包含?',
        answer: 2,
        options:['Exchange','全部皆是','Capture','Identify']
    },
    {
        id:nanoid() ,
        title: '網路視訊會議功能是屬於何者資訊系統?',
        answer: 1,
        options:['協同商務','ERP','CRM','SCM']
    },
    {
        id:nanoid() ,
        title: 'ETL是指?',
        answer: 1,
        options:['全部皆是','轉換Transformation','萃取Extraction','載入Loading']
    },{
        id:nanoid() ,
        title: '下列何者不是雲端運算?',
        answer: 1,
        options:['On Premise','全部皆是','Paas','IaaS']
    },
    {
        id:nanoid() ,
        title: '協同研發商務的重點?',
        answer: 3,
        options:['將企業內部研發擴展延伸到外部客戶和供應商的公同研發','是產業資源規劃的典型例子','全部皆是','在做研發程序中就考慮到共同需求']
    },
    {
        id:nanoid() ,
        title: '企業要運作整合性管理資訊系統須考慮因素?',
        answer: 1,
        options:['企業資源整合','服務科技化','前後端作業關聯','全部皆是']
    },
    {
        id:nanoid() ,
        title: '商業智慧是一種以提供什麼的營運資料?',
        answer: 1,
        options:['決策分析性','全部皆是','資料性','交易性']
    },
    {
        id:nanoid() ,
        title: '物聯網的目的?',
        answer: 3,
        options:['實現智慧化識別,定位,跟蹤,監控和管理的一種網路','方便識別和管理,進行資訊交換及通訊','全部皆是','是讓所有的物品都與網路連接在一起']
    },
    {
        id:nanoid() ,
        title: '最新資訊企業系統變革是指什麼?',
        answer: 3,
        options:['全部皆非','流程再造','智能物件','軟體技術']
    },
    {
        id:nanoid() ,
        title: '群組軟體功能是屬於何者資訊系統?',
        answer: 1,
        options:['協同商務','ERP','CRM','SCM']
    },
    {
        id:nanoid() ,
        title: '電子白板功能是屬於何者資訊系統?',
        answer: 1,
        options:['協同商務','ERP','CRM','SCM']
    },
    {
        id:nanoid() ,
        title: '協同商務在整合性管理資訊系統的重點為何?',
        answer: 2,
        options:['即時參與','全部皆是','整合所有利害關係人','共同平台']
    },
    {
        id:nanoid() ,
        title: '資料倉儲是以什麼為導向?',
        answer: 3,
        options:['沒有導向','完整性','主體性','全部皆非']
    },{
        id:nanoid() ,
        title: '一種結合電腦軟體和硬體的應用,成為韌體驅動的產品是什麼?',
        answer: 2,
        options:['全部皆是','Embeded System','IP','Wireless Sensor Network']
    },
    {
        id:nanoid() ,
        title: '整合性的管理資訊系統重點為何?',
        answer: 3,
        options:['整合企業夥伴的資訊系統','結合企業內不同資訊系統','全部皆是','服務導向架構']
    },
    {
        id:nanoid() ,
        title: 'IRP的模式內容重點為何?',
        answer: 2,
        options:['IRP系統營運兼顧協同和委外及內部模式','全部皆是','IRP系統分類','IRP產業鏈功能深化程度']
    }
]

export default Topic_list;