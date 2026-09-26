# Neon Theme Tic Tac Toe Game with Animations
Tic Tac Toe Games using vanilla JS

![welcome](web_snaps\welcome.png)

# JavaScript Flow

```text
Page loads
    ↓
Get player's name
    ↓
Show welcome message
    ↓
Player chooses X or O
    ↓
Store chosen mark
    ↓
Hide mark selection
    ↓
Game starts
    ↓
Player clicks a box
    ↓
Is the box already occupied?
    ├── Yes → Do nothing
    │
    └── No
         ↓
      Put current player's mark
         ↓
      Update board state
         ↓
      Check for a win
         ├── Yes → Show winner → End game
         │
         └── No
              ↓
           Check for a draw
              ├── Yes → Show draw → End game
              │
              └── No
                   ↓
                Switch player
                   ↓
                Wait for next click
                   ↓
                Repeat
```

### The main loop

```text
Click box
   ↓
Is it occupied?
   ↓ No
Place mark
   ↓
Check win
   ↓ No
Check draw
   ↓ No
Switch player
   ↓
Wait for next click
```
![welcome](web_snaps\welcome.png)
![rules](web_snaps\rules.png)
![choose](web_snaps\choose.png)
![dialog](web_snaps\dialog.png)
![cookie](web_snaps\cookie.png)