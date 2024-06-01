import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    color: 'black',
    flexDirection: 'column',
  },

  section: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
  },

  heading1Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 8,
  },

  heading2Text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },

  heading3Text: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },

  smallText: {
    fontSize: 11,
  },

  profileImage: {
    borderRadius: '50%',
    height: 50,
    width: 50,
  },

  viewer: {
    height: '100vh',
    width: '100%',
  },

  pageNumber: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
})
