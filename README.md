# Build a Slack Bot to Regulate Channel Topics with Airtable on Standard Library

[<img src="https://deploy.stdlib.com/static/images/deploy.svg?" width="192">](https://deploy.stdlib.com/)

Ever want to put an end to unwelcome Slack topic modifications? Take back control of your channels with Slack and Airtable on Standard Library. Just set up your Airtable Base as described below, and click the Deploy button at the top of this README, and you will be able to do just that.

## Set up Airtable
In order to track channels and topics, we will be using a resource called [Airtable](https://www.airtable.com). Airtable Bases look like spreadsheets, but operate like databases. Snag yourself a free account, and then click on **Add a base** > **Start from scratch**. Name your base **Channel Topics** and proceed to open it.

Name your table **Topics**, and populate it with two columns. Name the first column **Channel** and the second column **Topic**. Then add in a couple of rows of channels and topics that you would like to monitor. When you're done, it should look like this:

![base image](/readme/images/base.png)

## Deploy Your App
[<img src="https://deploy.stdlib.com/static/images/deploy.svg?" width="192">](https://deploy.stdlib.com/)

Click on Deploy on Standard Library, and complete linking your resources.

![link resources](/readme/images/link-resources.png)

Link your Airtable account first, and then select the Base that we set up earlier. It should be named **Channel Topics** by default, and the dialog box will look like the below:

![airtable bases](/readme/images/airtable-bases.png)

Click **Finish** to complete linking of your Base with your Standard Library account and that is it. You should see an **Identity Generated** message in the bottom right of this box, next to a green circle. Now proceed to click **Link Resource** to add a Slack workspace and bot. If you have a bot already deployed in your Slack workspace that you would like to also use for this project, select it here. Otherwise, set up a new bot by clicking on **Link New Resource**.

![slack bot screen](/readme/images/slack-bot.png)

Finish installing Standard Library into your Slack workspace and proceed to customize your bot. When you've completed these two steps, the blue **Deploy Project** button should become enabled, and you will be ready to launch your application. Give it a test by changing a couple of channel topics that you have set up monitoring for.
