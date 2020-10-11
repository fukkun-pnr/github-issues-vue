declare namespace Github {
    type Issues = Issue[];

    type Issue = {
        url: string;
        repositoryUrl: string;
        labelsUrl: string;
        commentsUrl: string;
        eventsUrl: string;
        htmlUrl: string;
        id: number;
        nodeId: string;
        number: number;
        title: string;
        user: User?;
        labels: Label[];
        state: string;
        locked: boolean;
        assignee: User?;
        assignees: User[];
        milestone: Milestone?;
        comments: number;
        createdAt: string;
        updatedAt: string;
        closedAt: string?;
        authorAssociation: string;
        activeLockReason: string?;
        body: string;
        performedViaGithubApp: string?;
        pullRequest: {
            url: string;
            htmlUrl: string;
            diffUrl: string;
            patchUrl: string;
        }?,
        repository: Repository?;
    }

    type User = {
        login: string;
        id: number;
        nodeId: string;
        avatarUrl: string;
        gravatarId: string;
        url: string;
        htmlUrl: string;
        followersUrl: string;
        followingUrl: string;
        gistsUrl: string;
        starredUrl: string;
        subscriptionsUrl: string;
        organizationsUrl: string;
        reposUrl: string;
        eventsUrl: string;
        receivedUventsUrl: string;
        type: string;
        siteAdmin: boolean;
    }

    type Label = {
        id: number;
        nodeId: string;
        url: string;
        name: string;
        color: string;
        default: boolean;
        description: string;
    }

    type Milestone = {
        url: string;
        htmlUrl: string;
        labelsUrl : string;
        id: number;
        nodeId: string;
        number: number;
        state: string;
        title: string;
        description: string;
        creator: User;
        openIssues: number;
        closedIssues: number;
        createdAt: string;
        updatedAt: string;
        closedAt: string;
        dueOn: string;
    }


    type Repository = {
        id: number;
        nodeId: string;
        name: string;
        fullName: string;
        owner: User;
        private: boolean;
        htmlUrl: string;
        description: string;
        fork: boolean;
        url: string;
        archiveUrl: string;
        assigneesUrl: string;
        blobsUrl: string;
        branchesUrl: string;
        collaboratorsUrl: string;
        commentsUrl: string;
        commitsUrl: string;
        compareUrl: string;
        contentsUrl: string;
        contributorsUrl: string;
        deploymentsUrl: string;
        downloadsUrl: string;
        eventsUrl: string;
        forksUrl: string;
        gitCommitsUrl: string;
        gitRefsUrl: string;
        gitTagsUrl: string;
        gitUrl: string;
        issueCommentUrl: string;
        issueEventsUrl: string;
        issuesUrl: string;
        keysUrl: string;
        labelsUrl: string;
        languagesUrl: string;
        mergesUrl: string;
        milestonesUrl: string;
        notificationsUrl: string;
        pullsUrl: string;
        releasesUrl: string;
        sshUrl: string;
        stargazersUrl: string;
        statusesUrl: string;
        subscribersUrl: string;
        subscriptionUrl: string;
        tagsUrl: string;
        teamsUrl: string;
        treesUrl: string;
        cloneUrl: string;
        mirrorUrl: string;
        hooksUrl: string;
        svnUrl: string;
        homepage: string;
        language: string;
        forksCount: number;
        stargazersCount: number;
        watchersCount: number;
        size: number;
        defaultBranch: string;
        openIssuesCount: number;
        isTemplate: boolean;
        topics: [];
        hasIssues: boolean;
        hasProjects: boolean;
        hasWiki: boolean;
        hasPages: boolean;
        hasDownloads: boolean;
        archived: boolean;
        disabled: boolean;
        visibility: string;
        pushedAt: string;
    }
}