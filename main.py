def showhour():
    if hours < 10:
        basic.show_number(hours)
    else:
        if hours == 10:
            basic.show_leds("""
                # . # # #
                                # . # . #
                                # . # . #
                                # . # . #
                                # . # # #
            """)
        if hours == 11:
            basic.show_leds("""
                # . # . .
                                # . # . .
                                # . # . .
                                # . # . .
                                # . # . .
            """)
        if hours == 12:
            basic.show_leds("""
                # . # # #
                                # . . . #
                                # . # # #
                                # . # . .
                                # . # # #
            """)

def on_button_pressed_a():
    showhour()
    basic.pause(5000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global hours
    if hours < 12:
        hours += 1
    else:
        hours = 1
    showhour()
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

hours = 0
hours = 1

def on_forever():
    global hours
    basic.pause(3600000)
    if hours < 12:
        hours += 1
    else:
        hours = 1
basic.forever(on_forever)
