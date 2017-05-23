
1. Fetch Pull/Commit  data  from that repo for past 3-6 months and hold it in JSON or XML or CSV file

Use below command to send the commit history to sample1.csv

git log --pretty=format:"%h, %cn, %cd" --since="24 weeks ago" > sample1.csv

2. Transform the data file and present it in Graph, categorized by Month.


Screenshot attached for the same.
