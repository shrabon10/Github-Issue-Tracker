const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"

const loadIssues = () => {
fetch(url)
.then(re => re.json())
.then(data => displayIssues(data.data))
};

loadIssues();

// Label element
const createElements = (array) => {
    const htmlElements = array.map(el => 
        `
        <div class="badge badge-soft ${el == 'bug' ? 'badge-error' : el == 'help wanted' ? 'badge-warning' : 'badge-success'} text-xs"> 
            <i class="fa-solid ${el == 'bug' ? 'fa-bug' : el == 'help wanted' ? 'fa-life-ring' : 'fa-wand-magic-sparkles'}"></i>
            ${el.toUpperCase()}
        </div>
        `
    );
    return htmlElements.join(" ");
}

// displayFuntion
const displayIssues = (issues) => {
    const parent = document.getElementById("card-container");
    parent.innerHTML = "";

    for(let issue of issues){
        // Create a new div
        const issueCard = document.createElement("div");
        issueCard.classList.add("issue-card", "rounded-lg", "bg-white", "flex", "flex-col");
        if(issue.status == "open"){
            issueCard.classList.add("open")
        } else {
            issueCard.classList.add("closed")
        }
        issueCard.setAttribute("id", issue.id);
        // innerHTML created
        issueCard.innerHTML = `
        <div class="immediate-child flex flex-col gap-3 p-4 flex-[80%]">
            <div class="header flex items-center justify-between">
                <img src="../assets/${issue.status}.png" alt="${issue.status}">
                <div class="badge badge-soft rounded-[100px] text-sm ${issue.priority == 'high' ? 'badge-error text-[#EF4444] bg-[#FEECEC]' : issue.priority == 'medium' ? 'badge-warning text-[#F59E0B] bg-[#FFF6D1' : 'badge-neutral text-[#9CA3AF]'}">
                ${issue.priority.toUpperCase()} </div>
            </div>
            <div class="text">
                <h3 class="text-md font-semibold">${issue.title} </h3>
                <p class="text-sm font-regular text-[#64748B]">${issue.description} </p>
            </div>
            <div class="labels flex flex-wrap gap-1">
                ${createElements(issue.labels)}
            </div>
        </div>
        <div class="immediate-child p-4 text-[#64748B] text-xs border-t border-[#E4E4E7]">
            <div class="footer w-[100%] h-[100%] flex flex-col gap-2">
                <p id="id" class="mb-2">#${issue.id} by ${issue.author}</p>
                <p id="date">${new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
            </div>
        </div>
        `
        parent.append(issueCard);
    }
    stopLoading();
    calculateCount();
}