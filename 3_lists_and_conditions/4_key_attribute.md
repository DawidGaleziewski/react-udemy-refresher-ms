React expects key prop on component rendered to a list dynamically (i.e via map) to a list

key prop helps update react list effectivly and know what needs to be changed in the dom

If we wont add a key prop react will have to re render the whole list which can be very inaffective for longer lists

using index is not advisable at it will change with the list i.e if array length changes
