$(document).ready(function () {
    $(".navbar-list-item-link").click(onClickNavbarListItemLink);
    $(".navbar-list-item").click(onClickNavbarListItem);
    $(".galleryImg").click(onClickGalleryImage)
});

function onClickNavbarListItem()
{
    event.stopPropagation();
    var $x = this;
    $x.children[0].click();
}

function onClickNavbarListItemLink()
{
    event.stopPropagation();
    var $link = this;
    var $hrefVal = $($link.hash);
    
    var $listItem = $($link.parentElement);
    var classAttributes = $listItem.attr("class");
    classAttributes += " navbar-list-item-selected";
    $(".navbar-list-item").removeClass("navbar-list-item-selected");
    $listItem.attr("class", classAttributes);
    
    $(".main-tabs").fadeOut(100).delay(100);
    $hrefVal.fadeIn(100);
    
    return false;
}

function onClickGalleryImage()
{
    var $img = this;
    var src = $img.src;
    window.open(src);
}