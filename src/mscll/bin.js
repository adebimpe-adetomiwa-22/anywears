<Stack
    direction='row'
    gap={2}
    sx={{
        padding: '0.5em',
        justifyContent: 'center',
    }}
>
    <Button
        variant='contained'
        sx={{
            bgcolor: '#9E682A',
            ':hover': {
                backgroundColor: '#9E682A',
                opacity: '0.9',
            },
        }}
    >
        Signup
    </Button>
    <Button
        // variant='outlined'
        sx={{
            color: '#9E682A',
            outline: '1px solid #9E682A',
            ':hover': {
                background: 'none',
                backgroundColor: '#EEE6DD',
            },
        }}
    >
        Login
    </Button>
</Stack>;
