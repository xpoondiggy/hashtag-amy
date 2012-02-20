/*
    Copyright 2012 yayramen && Inumedia.
    This is the enums file, where the speaking variables are stored.
    Change the value in the config files, controls how much the bot 
    spits out. 
*/
global.Speaking = {
    Default: { 
        flags: [SpeakingLevel.Greeting, SpeakingLevel.Misc]
    },
    Shy: { 
        flags: [SpeakingLevel.Misc]
    },
    Silent: { 
        flags: []
    },
    Debug: {
        flags: [SpeakingLevel.Verbose]
    }
};

global.SpeakingLevel = {
    Misc: {
        Val: 1,
        status: "Misc"
    },
    Greeting:{
        Val: 2,
        status: "Greeting"
    },
    SongChange:{
        val: 3,
        status: "SongChange"
    },
    DJChange:{
        val: 4,
        status: "DJChange"
    },
    MODChange:{
        val: 5,
        status: "MODChange"
    },
    Errors: {
        val: 6,
        status: "Errors"
    },
    Debug: { 
        val: 7,
        status: "Debug"
    },
    Verbose: {
        val: 8,
        status: "Verbose"
    }
}