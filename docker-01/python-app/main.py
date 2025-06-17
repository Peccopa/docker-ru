import calendar

print('Welcome to the NEW Calendar!\n')

year = int(input('Please, input the year: '))
month = int(input('Input the number of any month: '))

print(calendar.month(year, month))

print('Have a nice day!')