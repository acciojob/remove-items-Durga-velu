//your JS code here. If required.

document.getElementById("removeBtn").addEventListener("click",(event)=>{
	event.preventDefault();

	let selectedTag=document.getElementById("colorSelect")
	selectedTag.remove(selectedTag.selectedIndex)
})

