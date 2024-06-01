import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    color: 'black',
    flexDirection: 'column',
  },

  section: {
    margin: 10,
    padding: 10,
    flex: 1,
  },

  heading1Text: {
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 8,
    fontSize: 18,
  },

  heading2Text: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
    fontSize: 16,
  },

  heading3Text: {
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
    fontSize: 13,
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
    width: '100%',
    height: '100vh',
  },
})
