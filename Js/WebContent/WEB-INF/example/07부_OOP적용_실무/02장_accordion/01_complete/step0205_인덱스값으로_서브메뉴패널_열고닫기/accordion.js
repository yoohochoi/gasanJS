
// step #02-01
function FolderAccordionMenu(selector){
    this.$accordionMenu = null;
    this.$mainMenuItems = null;
    
    this.init(selector);
    this.initSubMenuPanel();
    
    // step #02-03
    this.initEvent();

}


/* step #02-01
* 요소 초기화
*/
FolderAccordionMenu.prototype.init=function(selector){
    this.$accordionMenu = $(selector);
    this.$mainMenuItems = this.$accordionMenu.children("li");   
}
    
    /* step #02-03
    * 이벤트 초기화
    */
FolderAccordionMenu.prototype.initEvent=function(){
    var objThis = this;
    this.$mainMenuItems.children(".main-title").click(function(e){
        var $item = $(this).parent();
        objThis.toggleSubMenuPanel($item);
    })
}



/* step #02-01
*  서브 패널 초기화 - 초기 시작히 닫힌 상태로 만들기 
*/
FolderAccordionMenu.prototype.initSubMenuPanel=function(){  
    var objThis =  this;
    this.$mainMenuItems.each(function(index){
        var $item = $(this);
        var $subMenu = $item.find(".sub");
        
        // 서브가 없는 경우 
        if($subMenu.length==0){
            $item.attr("data-extension","empty");           
            objThis.setFolderState($item, "empty");
        
        }else {
            if($item.attr("data-extension")=="open"){                           
                objThis.openSubMenu($item, false);
                
            }else{
                objThis.closeSubMenu($item,false);
            }
        }
    })
}




/* step #02-01
* 폴더 상태 설정
*/  
FolderAccordionMenu.prototype.setFolderState=function($item,state){
    var $folder = $item.find(".main-title .folder");
    // 기존 클래스를 모두 제거
    $folder.removeClass();
    $folder.addClass("folder "+state);

}

/*
* step #02-02
* 서브 메뉴 패널 열기 
* animation 기본 값은 true
*/
FolderAccordionMenu.prototype.openSubMenu=function($item, animation){

    if($item != null){
        $item.attr("data-extension", "open");
        
        var $subMenu = $item.find(".sub");
        
        // step #02-04
        if(animation==false){
            $subMenu.css({
                marginTop:0
            });
        }else {
            $subMenu.stop().animate({
                    marginTop:0
                },300,"easeInCubic"
            );
        }
        
        this.setFolderState($item, "open");
    }
}

/*
* step #02-02
* 서브 메뉴 패널 닫기
* animation 기본 값은 true
*/
FolderAccordionMenu.prototype.closeSubMenu=function($item, animation){
    if($item != null){
        $item.attr("data-extension", "close");
        
        var $subMenu = $item.find(".sub");
        
        
        // step #02-04
        var subMenuPanelHeight = -$subMenu.outerHeight(true);
        if(animation==false){
            $subMenu.css({
                marginTop:subMenuPanelHeight
            });
        }else {
            $subMenu.stop().animate({
                    marginTop:subMenuPanelHeight
                },300,"easeInCubic"
            );
        }
        
        this.setFolderState($item, "close");
    }
}

/*
* step #02-03
* 서브메뉴 패널 열고 닫기 
*/
FolderAccordionMenu.prototype.toggleSubMenuPanel=function($item){
    var extension = $item.attr("data-extension");
    
    // 서브가 없는 경우 취소
    if(extension=="empty"){
        return;
    }
    
    console.log("emtpy가 아닌 경우만 실행")
    if(extension=="open"){      
        this.closeSubMenu($item);
    }else{
        this.openSubMenu($item);
    }
}




/*
 * step #02-05
 * index 메뉴의 서브 메뉴 패널 닫기
 */
FolderAccordionMenu.prototype.closeSubMenuAt=function(index, animation){
    var $item = this.$mainMenuItems.eq(index);
    this.closeSubMenu($item, animation);
}

/*
 * step #02-05
 * index 메뉴의 서브 메뉴 패널 열기
 */
FolderAccordionMenu.prototype.openSubMenuAt=function(index, animation){
    var $item = this.$mainMenuItems.eq(index);
    this.openSubMenu($item, animation);
}

